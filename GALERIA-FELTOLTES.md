# 📸 Galéria Képek Feltöltése

Így tudsz képeket hozzáadni a galériához optimalizálva, hogy ne laggoljon az oldal:

## 1️⃣ Képek előkészítése

Másold be a képeket a `temp-gallery-images/` mappába.

```bash
# Például:
cp ~/Downloads/*.jpg temp-gallery-images/
```

**Támogatott formátumok:**
- JPG / JPEG
- PNG
- WebP

## 2️⃣ Képek optimalizálása

Futtasd a következő parancsot:

```bash
bun run optimize-gallery.js
```

Ez a script:
- ✅ Átméretezi a képeket max 1200x1200 pixelre
- ✅ Átalakítja WebP formátumba (80% minőség)
- ✅ Jelentősen csökkenti a fájlméretet
- ✅ Elmenti őket a `public/images/gallery/` mappába

**Példa kimenet:**
```
🖼️  Galéria képek optimalizálása...

📊 5 kép feldolgozása...

✅ photo1.jpg
   2,456 KB → 348 KB (85.8% csökkentés)
✅ photo2.jpg
   1,892 KB → 287 KB (84.8% csökkentés)
...

✨ Optimalizálás kész!
📁 A képek itt találhatók: public/images/gallery/
```

## 3️⃣ Galéria frissítése

Futtasd a következő parancsot:

```bash
bun run generate-gallery-list.js
```

Ez automatikusan:
- ✅ Beolvassa az összes képet a `public/images/gallery/` mappából
- ✅ Frissíti a `Gallery.jsx` komponenst
- ✅ Hozzáadja az összes képet a galériához

**Példa kimenet:**
```
📸 Galéria lista generálása...

✅ 5 kép találva

✨ Gallery.jsx sikeresen frissítve!
📊 5 kép hozzáadva a galériához

Hozzáadott képek:
  1. photo1.webp
  2. photo2.webp
  ...
```

## 4️⃣ Kész! 🎉

A képek most már láthatók a galériában:
- Lazy loading (csak amikor scrollozol oda)
- Optimalizált minőség (nem laggol)
- Kattintható lightbox megtekintéshez

## 🧹 Takarítás (opcionális)

A `temp-gallery-images/` mappa tartalma törölhető:

```bash
rm temp-gallery-images/*
```

## ⚙️ Testreszabás

Ha szeretnéd módosítani az optimalizálás beállításait, szerkeszd az `optimize-gallery.js` fájlt:

```javascript
const QUALITY = 80;        // WebP minőség (1-100)
const MAX_WIDTH = 1200;    // Max szélesség
const MAX_HEIGHT = 1200;   // Max magasság
```

## 📝 Megjegyzések

- Az eredeti képek a `temp-gallery-images/` mappában maradnak
- Az optimalizált képek a `public/images/gallery/` mappába kerülnek
- A WebP formátum kisebb fájlméret + jobb minőség
- A lazy loading biztosítja, hogy ne laggoljon az oldal
