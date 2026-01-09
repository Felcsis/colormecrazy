import React, { useRef, useEffect, useCallback } from 'react';
import useResizeObserver from '../hooks/useResizeObserver';
import './DotGrid.css';

const DotGrid = ({
  children,
  className = '',
  dotSize = 3,
  gap = 30,
  baseColor = '#FFC0CB',
  activeColor = '#FFC0CB',
  proximity = 120,
  shockRadius = 250,
  shockStrength = 5,
  resistance = 750,
  returnDuration = 1.5,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, isActive: false });
  const animationFrameRef = useRef(null);

  // Convert hex to rgba
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Create grid of dots
  const generateDots = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const cols = Math.ceil(width / gap);
    const rows = Math.ceil(height / gap);
    const dots = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dots.push({
          x: j * gap,
          y: i * gap,
          baseX: j * gap,
          baseY: i * gap,
          vx: 0,
          vy: 0,
          alpha: 0.3,
        });
      }
    }

    dotsRef.current = dots;
  }, [gap]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();

      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    const handleClick = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();

      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Apply shock wave
      dotsRef.current.forEach((dot) => {
        const dx = clickX - dot.x;
        const dy = clickY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < shockRadius) {
          const force = (1 - distance / shockRadius) * shockStrength;
          const angle = Math.atan2(dy, dx);
          dot.vx -= Math.cos(angle) * force;
          dot.vy -= Math.sin(angle) * force;
        }
      });
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      canvas.addEventListener('click', handleClick);

      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('click', handleClick);
      };
    }
  }, [shockRadius, shockStrength]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    generateDots();

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouseRef.current.isActive && distance < proximity) {
          // Repel from mouse with proximity
          const force = (1 - distance / proximity) * 0.5;
          dot.vx -= (dx / distance) * force;
          dot.vy -= (dy / distance) * force;

          // Interpolate alpha based on distance
          const alphaValue = 1 - (distance / proximity) * 0.7;
          dot.alpha = Math.max(0.3, alphaValue);
        } else {
          // Fade back to base alpha
          dot.alpha += (0.3 - dot.alpha) * 0.1;
        }

        // Apply resistance (friction)
        const resistanceFactor = 1 - (1 / resistance);
        dot.vx *= resistanceFactor;
        dot.vy *= resistanceFactor;

        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Return to base position with returnDuration
        const returnForce = 0.05 / returnDuration;
        const returnX = dot.baseX - dot.x;
        const returnY = dot.baseY - dot.y;
        dot.x += returnX * returnForce;
        dot.y += returnY * returnForce;

        // Determine color based on activity
        const color = dot.alpha > 0.5 ? activeColor : baseColor;

        // Draw dot
        ctx.fillStyle = hexToRgba(color, dot.alpha);
        ctx.beginPath();
        ctx.arc(dot.x * dpr, dot.y * dpr, dotSize * dpr, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    generateDots,
    dotSize,
    baseColor,
    activeColor,
    proximity,
    resistance,
    returnDuration,
  ]);

  // Handle resize
  useResizeObserver(containerRef, generateDots);

  return (
    <div ref={containerRef} className={`dot-grid-container ${className}`}>
      <canvas ref={canvasRef} className="dot-grid-canvas" />
      <div className="dot-grid-content">{children}</div>
    </div>
  );
};

export default DotGrid;
