# Instagram feed beállítása

Az oldal Instagram szekciója egy saját mozaikfal, ami az oldal színeit használja.
A képeket a `public/instagram-feed.json` fájlból veszi, amit a **build előtt**
futó `fetch-instagram.js` tölt le az Instagram Graph API-tól.

**Kulcs nélkül is működik:** ilyenkor a galéria (portfólió) képei jelennek meg.
Ha beállítod a kulcsot, magától átvált az élő posztokra és a valós követőszámra.

---

## Mit kell beállítani (kb. 20 perc, egyszer)

### Előfeltétel

- Az Instagram fióknak **üzleti (Business) vagy alkotói (Creator)** fióknak kell
  lennie – nem privát, nem sima személyes.
- Az Instagram fiók legyen **összekapcsolva a Facebook oldallal**
  (Instagram app → Beállítások → Fiókok összekapcsolása).

### 1. Facebook fejlesztői alkalmazás

1. Nyisd meg: https://developers.facebook.com/apps → **Alkalmazás létrehozása**
2. Típus: **Egyéb** → **Vállalkozás**
3. Add hozzá a terméket: **Instagram Graph API**

### 2. Hozzáférési kulcs (token)

1. Nyisd meg a **Graph API Explorer**-t:
   https://developers.facebook.com/tools/explorer/
2. Fent válaszd ki a most létrehozott alkalmazást
3. **Add a Permission** – ezeket kapcsold be:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
   - `business_management`
4. **Generate Access Token** → jelentkezz be, engedélyezd az oldalt és az
   Instagram fiókot
5. Másold ki a kapott kulcsot

### 3. A kulcs hosszú élettartamúvá tétele

A fenti kulcs csak 1 órán át él. Alakítsd át 60 naposra – nyisd meg ezt a címet
a böngészőben (a három helyőrzőt cseréld ki):

```
https://graph.facebook.com/v21.0/oauth/access_token
  ?grant_type=fb_exchange_token
  &client_id=ALKALMAZAS_AZONOSITO
  &client_secret=ALKALMAZAS_TITKOS_KULCS
  &fb_exchange_token=A_RÖVID_KULCS
```

Az alkalmazás azonosítója és titkos kulcsa: Facebook fejlesztői felület →
**Beállítások → Alapbeállítások**.

A válaszban kapott `access_token` a **60 napos kulcs**.

### 4. Beállítás a Railway-en

Railway → a `colormecrazy` szolgáltatás → **Variables**:

| Változó | Érték |
|---|---|
| `IG_ACCESS_TOKEN` | a 60 napos kulcs |
| `IG_USER_ID` | *(nem kötelező)* az Instagram üzleti fiók azonosítója |

Az `IG_USER_ID` elhagyható – a script magától kikeresi a kulcshoz tartozó
oldalból. Ha mégis meg akarod adni, itt látod:
`https://graph.facebook.com/v21.0/me/accounts?fields=instagram_business_account&access_token=A_KULCS`

Mentés után indíts egy új deployt (elég egy üres commit vagy a Railway
**Redeploy** gombja).

---

## Helyi kipróbálás

```bash
IG_ACCESS_TOKEN="a_kulcs" node fetch-instagram.js
```

Sikeres futás után létrejön a `public/instagram-feed.json`, és a `npm run dev`
alatt már az élő posztok látszanak.

---

## Fontos tudnivalók

- **A kulcs 60 naponta lejár.** Ilyenkor ismételd meg a 2–3. lépést, és
  frissítsd a Railway változót. A weboldal addig sem törik el: az utolsó
  letöltött posztokat mutatja, végső esetben a galéria képeit.
- **A feed a deploykor frissül**, nem folyamatosan. Ha friss posztokat akarsz
  kirakni, indíts egy új deployt (vagy állíts be ütemezett újraépítést).
- A hozzáférési kulcs **soha nem kerül ki a böngészőbe** – csak a build gépén
  fut, a látogató egy kész JSON fájlt lát.
- A `public/instagram-feed.json` szándékosan nincs verziókövetve
  (lásd `.gitignore`), mert build közben jön létre.

## Kapcsolódó fájlok

| Fájl | Szerep |
|---|---|
| `fetch-instagram.js` | letölti a posztokat build előtt (nem-fatális) |
| `src/components/InstagramFeed/InstagramFeed.jsx` | a mozaikfal |
| `src/components/InstagramFeed/InstagramFeed.css` | a szekció stílusa |
| `public/instagram-feed.json` | a letöltött adat (generált) |
