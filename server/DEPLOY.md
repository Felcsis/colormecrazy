# Backend Deployment Guide - Railway

## 📦 Docker Build Konfiguráció

A backend Docker-rel van konfigurálva a Railway deployment-hez.

### Fájlok:
- `Dockerfile` - Production build konfiguráció
- `.dockerignore` - Kizárt fájlok a build-ből
- `railway.json` - Railway deployment konfiguráció

## 🚀 Railway Deployment Lépések

### 1. Railway Service Létrehozása

Ha még nincs backend service:

```bash
# Railway CLI-vel (opcionális)
railway service create colormecrazy-backend
```

Vagy a Railway Dashboard-on:
1. Nyisd meg a projektet: **clever-nurturing**
2. Kattints: **New Service**
3. Válaszd: **GitHub Repo**
4. Repo: `Felcsis/colormecrazy`
5. Service név: **colormecrazy-backend**

### 2. Root Directory Beállítása

**FONTOS:** A Railway-nek tudnia kell, hogy a `/server` mappából buildeljünk.

**Railway Dashboard-on:**
1. Service Settings → **Build**
2. Root Directory: `server`
3. Save

**Vagy railway.toml fájllal** (projekt root-ban):
```toml
[build]
root = "server"
```

### 3. Environment Változók Beállítása

Railway Dashboard → Service → Variables:

```bash
# Database (Link to Postgres service)
DATABASE_URL=${{Postgres.DATABASE_URL}}

# Session
SESSION_SECRET=<generálj egy random 32+ karakter hosszú stringet>

# Environment
NODE_ENV=production

# Server
PORT=3001

# Frontend URL (CORS)
FRONTEND_URL=https://colormecrazy.hu
```

**SESSION_SECRET generálása:**
```bash
# Lokálisan futtasd:
openssl rand -base64 32
# Vagy:
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4. Postgres Service Link

Railway Dashboard-on:
1. Backend service → **Variables** tab
2. Kattints: **+ New Variable**
3. Válaszd: **Add Reference**
4. Service: **Postgres**
5. Variable: **DATABASE_URL**
6. Ez automatikusan létrehozza: `${{Postgres.DATABASE_URL}}`

### 5. Deploy

Railway automatikusan deploy-ol minden git push-ra.

**Manuális deploy:**
```bash
railway up
```

**Vagy GitHub push:**
```bash
git add .
git commit -m "Add backend Docker configuration"
git push origin main
```

Railway automatikusan:
1. Észleli a `/server/Dockerfile`-t
2. Build-eli a Docker image-et
3. Deploy-olja a konténert
4. Health check-et futtat (`/health` endpoint)

## 🔍 Deploy Ellenőrzés

### Logok Nézése

```bash
railway logs
```

**Vagy Railway Dashboard:**
Service → **Deployments** → Latest deployment → **View Logs**

### Health Check

Miután a deployment sikeres:

```bash
curl https://your-backend-url.railway.app/health
```

Várt válasz:
```json
{
  "status": "ok",
  "timestamp": "2026-01-31T..."
}
```

### Login Teszt

```bash
curl -X POST https://your-backend-url.railway.app/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"Felcsi","password":"felcsi123"}'
```

## 📝 Frontend Frissítés

Miután a backend deploy-olva van, frissítsd a frontend environment változót:

**Railway Dashboard:**
1. **colormecrazy** service → Variables
2. Találd: `VITE_API_URL`
3. Értéke: `https://your-backend-url.railway.app/api`
4. Redeploy a frontend

**Vagy lokálisan:**

`.env.production`:
```bash
VITE_API_URL=https://colormecrazy-backend-production.up.railway.app/api
```

```bash
git add .env.production
git commit -m "Update API URL to Railway backend"
git push
```

## 🐛 Troubleshooting

### Build Fails

**Hiba:** "No Dockerfile found"

**Megoldás:** Ellenőrizd a Root Directory beállítást:
- Railway Settings → Build → Root Directory: `server`

### Database Connection Error

**Hiba:** "ENOTFOUND" vagy "Connection refused"

**Megoldás:**
1. Ellenőrizd hogy a Postgres service fut
2. Ellenőrizd a `DATABASE_URL` változót
3. Használd a **reference** változót: `${{Postgres.DATABASE_URL}}`

### Health Check Fails

**Hiba:** "Health check failed"

**Megoldás:**
1. Nézd meg a logokat: `railway logs`
2. Ellenőrizd hogy a szerver elindul-e
3. Ellenőrizd hogy a `/health` endpoint válaszol-e

### CORS Errors

**Hiba:** Frontend nem tud csatlakozni

**Megoldás:**
1. Ellenőrizd `FRONTEND_URL` értékét
2. Frissítsd a `src/middleware/cors.ts` allowed origins-t ha szükséges
3. Redeploy

## 📊 Deployment Checklist

- [ ] Railway service létrehozva
- [ ] Root directory: `server` beállítva
- [ ] Postgres service linkelt
- [ ] Environment változók beállítva:
  - [ ] DATABASE_URL
  - [ ] SESSION_SECRET
  - [ ] NODE_ENV=production
  - [ ] PORT=3001
  - [ ] FRONTEND_URL
- [ ] Dockerfile létezik a `/server` mappában
- [ ] railway.json konfiguráció rendben
- [ ] Git push a main branch-re
- [ ] Deploy sikeres (zöld checkmark)
- [ ] Health check OK
- [ ] Login teszt sikeres
- [ ] Frontend VITE_API_URL frissítve
- [ ] Frontend redeploy-olva
- [ ] Production teszt a böngészőben

## 🎯 Várható Deployment Idő

- **Build:** ~2-3 perc
- **Deploy:** ~30 másodperc
- **Health check:** ~10 másodperc
- **Összesen:** ~3-4 perc

## 📱 Deployment URL

Miután sikeres a deployment, a backend URL valami ilyesmi lesz:

```
https://colormecrazy-backend-production-XXXX.up.railway.app
```

Ezt kell majd használni a frontend `VITE_API_URL` változójában.

## ✅ Sikeres Deployment Jelei

1. Railway Dashboard-on zöld pipa ✅
2. Logs-ban: "Server is running on http://localhost:3001"
3. Health endpoint válaszol: `{"status":"ok"}`
4. Login működik
5. Frontend csatlakozik

---

**Ha bármilyen problémád van, nézd meg a logs-okat és ellenőrizd a fenti checklist-et!**
