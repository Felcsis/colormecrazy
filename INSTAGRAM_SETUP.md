# Instagram Feed Beállítási Útmutató

## Hogyan ágyazd be a saját Instagram posztjaidat?

### 1. lépés: Instagram poszt linkek megszerzése

1. Nyisd meg az Instagram alkalmazást vagy weboldalt
2. Válaszd ki azt a 3 posztot, amit meg szeretnél jeleníteni a weboldalon
3. Minden poszthoz:
   - Kattints a poszt jobb felső sarkában található három pontra (⋯)
   - Válaszd a "Link másolása" opciót
   - A link így fog kinézni: `https://www.instagram.com/p/ABC123xyz/`

### 2. lépés: Linkek beillesztése a kódba

1. Nyisd meg a következő fájlt: `src/components/InstagramFeed/InstagramFeed.jsx`

2. Keresd meg ezeket a sorokat (kb. 37-55. sor környékén):

```jsx
<blockquote
  className="instagram-media"
  data-instgrm-captioned
  data-instgrm-permalink="https://www.instagram.com/p/PLACEHOLDER1/"
  data-instgrm-version="14"
></blockquote>
```

3. Cseréld ki a `PLACEHOLDER1`, `PLACEHOLDER2`, `PLACEHOLDER3` szövegeket a saját poszt azonosítóidra.

**Példa:**
Ha a poszt linked: `https://www.instagram.com/p/C1AB2CD3EF4/`
Akkor a beállítás:
```jsx
<blockquote
  className="instagram-media"
  data-instgrm-captioned
  data-instgrm-permalink="https://www.instagram.com/p/C1AB2CD3EF4/"
  data-instgrm-version="14"
></blockquote>
```

### 3. lépés: További posztok hozzáadása

Ha 3-nál több posztot szeretnél megjeleníteni, egyszerűen másold le a blockquote blokkot:

```jsx
<blockquote
  className="instagram-media"
  data-instgrm-captioned
  data-instgrm-permalink="https://www.instagram.com/p/ÚJ_POSZT_ID/"
  data-instgrm-version="14"
></blockquote>
```

### 4. lépés: Instagram profil linkek frissítése

Ha az Instagram felhasználóneved más, mint `@colorme_c_hair`, akkor frissítsd:

1. A `src/components/InstagramFeed/InstagramFeed.jsx` fájlban keresd meg:
   - `https://www.instagram.com/colorme_c_hair/`
   - `@colorme_c_hair`

2. Cseréld ki őket a saját Instagram felhasználónevedre.

3. Ugyanezt tedd meg az `index.html` fájlban is (65-66. sor):
```html
"sameAs": [
  "https://www.facebook.com/colormecrazyszeged",
  "https://www.instagram.com/colorme_c_hair"
]
```

### 5. lépés: Mentés és tesztelés

1. Mentsd el a módosításokat
2. Futtasd a dev szervert: `bun run dev`
3. Nyisd meg a böngészőben: `http://localhost:5173`
4. Görgess le az Instagram Feed szekcióig

## Tippek

- Az Instagram posztok automatikusan betöltődnek
- A posztok reszponzívak lesznek (mobil, tablet, desktop)
- Ha egy poszt nem jelenik meg, ellenőrizd, hogy:
  - A poszt nyilvános-e (nem privát fiók)
  - A poszt ID helyes-e
  - Van-e internetkapcsolat

## Gyakori problémák

**Probléma:** A posztok nem töltődnek be
**Megoldás:** Frissítsd az oldalt (F5) vagy töröld a böngésző cache-t

**Probléma:** "Poszt nem található" hiba
**Megoldás:** Ellenőrizd, hogy a poszt ID és a link helyes-e

**Probléma:** Poszt privát fiókból
**Megoldás:** Az Instagram csak nyilvános posztokat enged beágyazni

## Példa konfiguráció

```jsx
// 3 legfrissebb poszt megjelenítése
<div className="instagram-grid" ref={feedRef}>
  <blockquote
    className="instagram-media"
    data-instgrm-captioned
    data-instgrm-permalink="https://www.instagram.com/p/C9XyZ123456/"
    data-instgrm-version="14"
  ></blockquote>

  <blockquote
    className="instagram-media"
    data-instgrm-captioned
    data-instgrm-permalink="https://www.instagram.com/p/C8WxY098765/"
    data-instgrm-version="14"
  ></blockquote>

  <blockquote
    className="instagram-media"
    data-instgrm-captioned
    data-instgrm-permalink="https://www.instagram.com/p/C7VwX987654/"
    data-instgrm-version="14"
  ></blockquote>
</div>
```

Kész! Az Instagram feed most már a saját posztjaidat jeleníti meg! 🎉
