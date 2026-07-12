import { useEffect } from 'react';

const SITE = 'https://colormecrazy.hu';

/** Meglévő <meta> frissítése vagy létrehozása (duplikáció nélkül). */
function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** <link rel="canonical"> frissítése vagy létrehozása. */
function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Route-onkénti SEO: beállítja a title-t, a leírást, a canonical URL-t
 * és a megfelelő Open Graph / Twitter tageket. A meglévő fej-tageket
 * frissíti, nem hoz létre duplikátumot.
 */
export function useSeo({ title, description, path }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta('property', 'og:title', title);
      upsertMeta('property', 'twitter:title', title);
    }
    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('property', 'twitter:description', description);
    }
    const url = SITE + (path ?? window.location.pathname);
    upsertCanonical(url);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'twitter:url', url);
  }, [title, description, path]);
}
