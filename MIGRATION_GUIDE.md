# PostgreSQL Migration Guide

## Overview

This guide walks you through migrating the ColorMeCrazy portfolio app from a pure frontend app with localStorage/JSON data to a full-stack application with PostgreSQL backend.

## Prerequisites

- Railway account with existing Postgres database
- Bun installed locally
- Access to the Railway CLI (optional)

## Step 1: Backend Setup

The backend is now located in the `/server` directory with the following structure:

```
/server
├── src/
│   ├── index.ts              # Main Hono app
│   ├── config/
│   │   └── database.ts       # Postgres connection
│   ├── middleware/
│   │   ├── auth.ts           # Session validation
│   │   └── cors.ts           # CORS config
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── schedules.routes.ts
│   │   ├── bookings.routes.ts
│   │   ├── inventory.routes.ts
│   │   └── finance.routes.ts
│   ├── services/
│   │   └── auth.service.ts
│   ├── db/
│   │   ├── schema.sql        # Database schema
│   │   └── seed.ts           # Migration script
│   └── utils/
│       └── crypto.ts         # bcrypt utilities
├── package.json
└── .env
```

## Step 2: Configure Environment Variables

### Backend (.env in /server)

```bash
# Get DATABASE_URL from Railway Postgres service
DATABASE_URL=postgresql://username:password@host:port/database

# Generate a random 32+ character string
SESSION_SECRET=your-random-secret-key-here

NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### Frontend

**Local (.env.local):**
```bash
VITE_API_URL=http://localhost:3001/api
```

**Production (.env.production):**
```bash
VITE_API_URL=https://your-backend.railway.app/api
```

## Step 3: Run Database Migration

### 3.1 Apply Schema

First, apply the database schema to your Railway Postgres database. You can do this via:

**Option A: Railway CLI**
```bash
railway run psql < server/src/db/schema.sql
```

**Option B: Railway Dashboard**
- Open your Postgres service in Railway
- Click "Data" tab
- Copy contents of `server/src/db/schema.sql` and execute

**Option C: Local psql with Railway DATABASE_URL**
```bash
psql $DATABASE_URL -f server/src/db/schema.sql
```

### 3.2 Seed Data

Run the migration script to populate the database with existing data:

```bash
cd server
bun run seed
```

This will:
- Hash all user passwords with bcrypt
- Migrate users (3 admins, 5 students)
- Parse and migrate schedules
- Migrate model bookings
- Migrate inventory products and shades
- Create sample finance data
- Set up settings and service types

## Step 4: Test Backend Locally

```bash
# Terminal 1: Start backend
cd server
bun run dev

# Terminal 2: Start frontend
cd ..
bun run dev
```

Test the following:
1. Login at http://localhost:5173/login
2. Verify dashboard loads
3. Check calendar schedules appear
4. Test model bookings CRUD
5. Check inventory loads
6. Test finance module

## Step 5: Deploy to Railway

### 5.1 Create Backend Service

1. In Railway dashboard, click "New Service"
2. Select "Empty Service"
3. Name it "colormecrazy-backend"
4. Link to your existing Postgres service
5. Set environment variables:
   - `DATABASE_URL` (from Postgres service)
   - `NODE_ENV=production`
   - `SESSION_SECRET` (generate random 32+ chars)
   - `FRONTEND_URL=https://colormecrazy.hu`
   - `PORT=3001`

6. Deploy backend:
   - Railway will detect `server/railway.json`
   - Build command: `cd server && bun install`
   - Start command: `cd server && bun run src/index.ts`

### 5.2 Update Frontend Service

1. Update environment variable in Railway:
   - `VITE_API_URL=https://colormecrazy-backend.up.railway.app/api`

2. Redeploy frontend (it will automatically rebuild)

## Step 6: Production Testing

1. Visit https://colormecrazy.hu/login
2. Test login with existing credentials
3. Verify all features work:
   - Calendar schedules
   - Model bookings
   - Inventory management
   - Finance tracking
4. Check browser cookies (should see `session_token`)

## API Endpoints

### Auth
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Schedules
- `GET /api/schedules?date=YYYY-MM-DD` - Get schedules
- `POST /api/schedules` - Save schedule

### Bookings
- `GET /api/bookings?studentId=X&date=Y` - List bookings
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

### Inventory
- `GET /api/inventory/products?brand=Matrix` - List products
- `GET /api/inventory/products/:id` - Get product with shades
- `PUT /api/inventory/products/:id` - Update quantity
- `PUT /api/inventory/shades/:id` - Update shade quantity

### Finance
- `GET /api/finance/incomes?period=month` - List incomes
- `POST /api/finance/incomes` - Create income
- `DELETE /api/finance/incomes/:id` - Delete income
- `GET /api/finance/expenses?period=month` - List expenses
- `POST /api/finance/expenses` - Create expense
- `DELETE /api/finance/expenses/:id` - Delete expense

## User Credentials

All users have the password format: `{name}123`

**Admins:**
- felcsi / felcsi123
- gitta / gitta123
- lili / lili123

**Students:**
- fanni / fanni123
- jazmin / jazmin123
- mira / mira123
- dorina / dorina123
- bence / bence123

## Security Features

- ✅ Passwords hashed with bcrypt (salt rounds=10)
- ✅ HTTP-only secure cookies for sessions
- ✅ CORS whitelist (localhost + colormecrazy.hu)
- ✅ SQL injection prevention (parameterized queries)
- ✅ Session expiration (7 days, auto-refresh on activity)
- ✅ Secure cookies in production (HTTPS only)

## Troubleshooting

### "Unauthorized" errors
- Check that cookies are enabled in browser
- Verify CORS settings include your frontend domain
- Check session hasn't expired

### Database connection errors
- Verify DATABASE_URL is correct
- Check Railway Postgres is running
- Ensure Railway services are linked

### Migration script fails
- Check that schema has been applied first
- Verify `src/data/database.json` exists
- Check Railway Postgres has enough storage

### Login doesn't work
- Clear browser cookies
- Check backend logs for errors
- Verify user was migrated correctly: `SELECT * FROM users;`

## Rollback Strategy

If you need to rollback:

1. Keep `database.json` file (don't delete yet)
2. Take Railway Postgres snapshot before migration
3. Revert frontend to previous commit
4. Switch backend service offline

## Next Steps After Migration

1. Monitor Railway logs for any errors
2. Test all features thoroughly in production
3. Once stable, you can remove:
   - `/src/data/database.json`
   - localStorage code references
   - Old migration files

## Support

For issues, check:
- Railway dashboard logs
- Browser console errors
- Network tab for failed API requests
