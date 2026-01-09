import { useEffect } from 'react';

const useResizeObserver = (ref, callback) => {
  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (callback) callback();
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, callback]);
};

export default useResizeObserver;
