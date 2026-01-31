# Quick Start Guide - Local Development

## 1. Setup Backend Environment

```bash
cd server
cp .env.example .env
```

Edit `server/.env` and add your Railway Postgres DATABASE_URL:
```
DATABASE_URL=postgresql://username:password@host:port/database
SESSION_SECRET=any-random-32-character-string-here
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173
```

## 2. Install Dependencies

```bash
# Backend
cd server
bun install

# Frontend (from root)
cd ..
bun install
```

## 3. Setup Database

### Apply schema to your Railway Postgres:
```bash
# Get DATABASE_URL from Railway dashboard, then:
psql $DATABASE_URL -f server/src/db/schema.sql
```

### Run migration to populate data:
```bash
cd server
bun run seed
```

You should see output like:
```
Starting database migration...

Migrating users...
  ✓ Migrated user: Felcsi
  ✓ Migrated user: Gitta
  ...
✅ Migration completed successfully!
```

## 4. Start Development Servers

### Terminal 1 - Backend:
```bash
cd server
bun run dev
```

Should see:
```
Starting ColorMeCrazy backend server...
Environment: development
Server is running on http://localhost:3001
```

### Terminal 2 - Frontend:
```bash
bun run dev
```

Should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

## 5. Test the Application

1. Open http://localhost:5173
2. Click "Login"
3. Use credentials: `felcsi` / `felcsi123`
4. Verify:
   - Dashboard loads
   - Calendar shows schedules
   - Can view model bookings
   - Inventory loads
   - Finance module works

## Common Issues

### "Database connection error"
- Check DATABASE_URL is correct in `server/.env`
- Verify Railway Postgres is running

### "CORS error" in browser
- Check backend is running on port 3001
- Verify FRONTEND_URL in server/.env is `http://localhost:5173`

### "Schema already exists"
- This is OK if you've run the schema before
- The schema uses `DROP TABLE IF EXISTS`

### Login doesn't work
- Check backend logs for errors
- Verify migration ran successfully
- Try: `psql $DATABASE_URL -c "SELECT * FROM users;"`

## Available Scripts

### Backend
- `bun run dev` - Start dev server with watch mode
- `bun run start` - Start production server
- `bun run seed` - Run database migration

### Frontend
- `bun run dev` - Start dev server
- `bun run build` - Build for production
- `bun run preview` - Preview production build

## Next Steps

After confirming everything works locally:
1. Read `MIGRATION_GUIDE.md` for full deployment guide
2. Deploy backend to Railway
3. Update frontend environment variables
4. Deploy frontend
