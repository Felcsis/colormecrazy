# Facebook Messenger Chat Beállítás

A Facebook Messenger Chat widget integrálva van a weboldalba! Csak egy lépés van hátra:

## Facebook Page ID megtalálása

### 1. Menj erre az oldalra:
https://commentpicker.com/find-facebook-id.php

### 2. Illeszd be a Facebook oldal URL-jét:
```
https://www.facebook.com/colormecrzy
```

### 3. Kattints a "Find ID" gombra

### 4. Másold ki a numerikus Page ID-t
(Valami ilyesmi lesz: `123456789012345`)

### 5. Frissítsd a kódot

Nyisd meg ezt a fájlt:
```
src/components/MessengerChat/MessengerChat.jsx
```

Keresd meg ezt a sort (kb. 43. sor):
```javascript
page_id="YOUR_PAGE_ID_HERE"
```

Cseréld ki a saját Page ID-dre:
```javascript
page_id="123456789012345"
```

### 6. Mentsd el és build

```bash
bun run build
```

## Kész!

A Facebook Messenger chat buborék megjelenik a weboldal jobb alsó sarkában lila színnel (#8b7eb8) a márka színében.

## Beállítások

A chat widget testreszabható a `MessengerChat.jsx` fájlban:

- **theme_color**: A chat buborék színe (jelenleg: #8b7eb8 - lila)
- **logged_in_greeting**: Üdvözlő szöveg bejelentkezett felhasználóknak
- **logged_out_greeting**: Üdvözlő szöveg kijelentkezett felhasználóknak

## Tesztelés

1. Build után nyisd meg a weboldalt
2. Nézd meg a jobb alsó sarokban megjelenik-e a Messenger ikon
3. Kattints rá és teszteld az üzenetküldést
4. Az üzenetek megjelennek a Facebook oldalad Messenger inbox-ában

---

**FONTOS:**
- A Facebook Page-en be kell kapcsolni a Messenger funkciót (alapból be van)
- Az üzenetek a Facebook oldalad inbox-ába érkeznek
- Válaszolhatsz a Messenger app-ból vagy Facebook-ról
