# SEO Beállítási és Marketing Útmutató

## Mit csináltunk eddig? ✅

### 1. SEO Meta Tagek
Az `index.html` fájlban hozzáadtuk:
- **Title tag**: Optimalizált cím kulcsszavakkal (fodrászat szeged, kozmetika)
- **Description**: Leíró szöveg, ami megjelenik a Google keresési eredményekben
- **Keywords**: Releváns kulcsszavak (fodrászat, kozmetika, hajvágás, raszta, szeged)
- **Canonical URL**: Megakadályozza a duplikált tartalom problémát

### 2. Social Media Meta Tagek (Open Graph & Twitter Card)
- Facebook, Instagram, Twitter megosztásnál szép előnézeti kép és szöveg
- Amikor valaki megosztja az oldalt, professzionális kártya jelenik meg

### 3. Structured Data (Schema.org JSON-LD)
- Google My Business / Google Maps integrációhoz
- Gazdag keresési eredmények (rich snippets):
  - Címed
  - Telefonszámod
  - Nyitvatartás
  - Értékelések
  - Térképi pozíció

### 4. robots.txt
- Engedélyezi a keresőmotoroknak az oldal indexelését
- Irányítja a Google botokat

### 5. sitemap.xml
- Az oldal térképe a keresőmotorok számára
- Megkönnyíti az indexelést

### 6. Instagram Feed
- Élő Instagram poszt beágyazás
- Növeli a közösségi média engagement-et

---

## Mit kell még tenned a Google-ben való megjelenéshez? 📋

### 1. Google My Business Regisztráció (KRITIKUS!)

Ez a **legfontosabb** lépés a helyi keresésekhez!

**Lépések:**
1. Menj a [Google My Business](https://business.google.com) oldalra
2. Jelentkezz be a Google fiókodba
3. Kattints a "Manage now" gombra
4. Add meg az üzlet adatait:
   - **Név**: Color Me Crazy
   - **Kategória**: Fodrászat, Kozmetika
   - **Cím**: Nemes Takács utca 8, Szeged, 6720
   - **Telefon**: +36 30 089 4587
   - **Weboldal**: https://colormecrazyszeged.hu
   - **Nyitvatartás**: Hétfő-Péntek 9:00-18:00
5. Igazold a tulajdonjogot (postai kóddal vagy telefonon)
6. Tölts fel **minőségi fotókat**:
   - Szalon belseje
   - Kész munkák (előtte-utána képek)
   - Csapat fotók
   - Logo

**Miért fontos?**
- Megjelensz a Google Maps-en
- "fodrászat szeged" keresésnél az első helyen lehetsz
- Ügyfelek írhatnak értékeléseket

### 2. Google Search Console Beállítás

**Miért kell?**
- Láthatod hogyan találják meg az oldaladat
- Milyen kulcsszavakra találnak rád
- Technikai hibák jelentése

**Lépések:**
1. Menj a [Google Search Console](https://search.google.com/search-console) oldalra
2. Kattints "Add property"
3. Írd be: `https://colormecrazyszeged.hu`
4. Igazold a tulajdonjogot (HTML fájl feltöltéssel vagy meta taggel)
5. Add be a sitemap-et: `https://colormecrazyszeged.hu/sitemap.xml`

### 3. Google Analytics Beállítás (Opcionális, de ajánlott)

**Miért kell?**
- Láthatod hány látogatód van
- Honnan jönnek (Google, Facebook, Instagram, stb.)
- Mely oldalak a legnépszerűbbek

**Lépések:**
1. Menj a [Google Analytics](https://analytics.google.com) oldalra
2. Hozz létre egy új property-t
3. Kapni fogsz egy tracking ID-t (pl. G-XXXXXXXXXX)
4. **Kérd meg a Claude-ot vagy a fejlesztőt, hogy integrálja be az oldalba**

### 4. Domain Beállítások (FONTOS!)

Az `index.html`-ben és más helyeken `https://colormecrazyszeged.hu` domain van.

**Ha más a domain neved:**
1. Frissítsd az `index.html` fájlban:
   - Canonical URL (14. sor)
   - Open Graph URL (18. sor)
   - Twitter URL (27. sor)
   - Schema.org URL (40. sor)
2. Frissítsd a `public/sitemap.xml` fájlban az összes URL-t
3. Frissítsd a `public/robots.txt` fájlban a Sitemap URL-t

**Ha még nincs domain:**
- Vásárolj egy domain-t (pl. namecheap.com, domain.com)
- Ajánlott nevek:
  - colormecrazyszeged.hu
  - colormecrazyszalon.hu
  - colormecrazyfodraszat.hu

### 5. Facebook & Instagram Business Oldal

**Facebook:**
1. Hozz létre Facebook Business oldalt
2. Töltsd fel:
   - Profil- és borítókép
   - Kapcsolati adatok
   - Weboldal link
   - Nyitvatartás
3. Link: `https://www.facebook.com/colormecrazyszeged` (ezt frissítsd!)

**Instagram:**
1. Alakítsd át Business fiókká
2. Töltsd fel az adatokat
3. Rendszeresen posztolj (hetente 2-3x)
4. Használj hashtag-eket:
   - #szegedfodrász
   - #fodrászatszeged
   - #szegedifodrász
   - #colormecrazyszeged
   - #hairstyleszeged

### 6. Helyi SEO Kulcsszavak

**Amit célozz:**
- fodrászat szeged
- fodrász szeged
- hajvágás szeged
- kozmetika szeged
- raszta szeged
- női fodrász szeged
- férfi fodrász szeged
- gyermek fodrász szeged

**Hol használd ezeket:**
- Blog posztokban
- Szolgáltatás leírásokban
- Meta description-ben (már benne van!)
- Google My Business leírásban

### 7. Értékelések Gyűjtése

**Nagyon fontos a rangsoroláshoz!**

**Lépések:**
1. Kérd meg az elégedett ügyfeleket, hogy írjanak értékelést:
   - Google My Business-re
   - Facebook-ra
2. Válaszolj minden értékelésre (pozitív és negatív is)
3. Oszd meg a pozitív értékeléseket Facebook/Instagram-on

### 8. Weboldal Publikálása

**Hosting szolgáltatók (ajánlott):**
- **Netlify** (ingyenes, egyszerű) - AJÁNLOTT
- **Vercel** (ingyenes, profi)
- **GitHub Pages** (ingyenes)

**Deploy lépések Netlify-re:**
1. Push-old a kódot GitHub-ra
2. Menj a [netlify.com](https://netlify.com) oldalra
3. Kattints "New site from Git"
4. Válaszd ki a GitHub repository-t
5. Build parancs: `bun run build`
6. Publish directory: `dist`
7. Kattints "Deploy site"
8. Kötsd hozzá a domain-edet

### 9. Rendszeres Tartalom Készítés

**Blog posztok témái:**
- "Top 5 hajtrend 2026-ban Szegeden"
- "Raszta hajviselet ápolási tippek"
- "Mikor kell hajvágásra menni?"
- "Kozmetikai kezelések télen"
- "Előtte-utána transzformációk"

**Miért fontos?**
- Google szereti a friss tartalmat
- Növeli a kulcsszó lefedettséget
- Megosztható tartalom Facebook/Instagram-on

### 10. Linkbuilding

**Helyi linkek:**
- Szegedi üzleti könyvtárak
- Szegedi közösségi oldalak
- Szegedi bloggerek, influencerek
- Együttműködés más szegedi vállalkozásokkal

---

## Gyors Ellenőrzőlista (Checklist) ✓

- [ ] Google My Business regisztráció és igazolás
- [ ] Minőségi fotók feltöltése GMB-re
- [ ] Google Search Console beállítás
- [ ] Sitemap beküldése Search Console-ba
- [ ] Facebook Business oldal létrehozás
- [ ] Instagram Business fiók létrehozás
- [ ] Domain megvásárlás (ha nincs)
- [ ] Domain linkek frissítése a kódban
- [ ] Weboldal publikálása hosting szolgáltatóra
- [ ] Google Analytics beállítás (opcionális)
- [ ] 5+ minőségi fotó feltöltése a weboldalra
- [ ] Instagram posztok beágyazása (lásd INSTAGRAM_SETUP.md)
- [ ] Első 5 ügyfél értékelés gyűjtése
- [ ] Első blog poszt írása
- [ ] Hashtag stratégia kidolgozása
- [ ] Heti posztolási ütemterv készítése

---

## Várható Eredmények 📈

**1-2 hét után:**
- Google indexelni kezdi az oldalt
- Megjelensz "color me crazy szeged" keresésre

**1 hónap után:**
- Megjelensz "fodrászat szeged" keresésre (2-3. oldal)
- Google Maps-en megjelensz

**3 hónap után:**
- Top 10 helyi kereséseknél
- Havi 100-500 látogató
- Havi 5-10 online időpontfoglalás

**6 hónap után:**
- Top 3 "fodrászat szeged" keresésre
- Havi 500-1000 látogató
- Jelentős online jelenlét

---

## Hasznos Eszközök

- **Google Keyword Planner**: Kulcsszó kutatás
- **Google PageSpeed Insights**: Oldal sebesség tesztelés
- **Mobile-Friendly Test**: Mobil optimalizálás ellenőrzés
- **Ubersuggest**: SEO elemzés
- **Canva**: Közösségi média grafikák készítése

---

## Segítségre van szükséged?

Ha bármilyen kérdésed van vagy segítségre van szükséged:
1. Kérdezd meg Claude-ot
2. Nézz utána YouTube tutorialokon
3. Google My Business súgó: [support.google.com/business](https://support.google.com/business)

**Sok sikert a marketing kampányhoz!** 🚀
