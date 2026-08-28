# Baybound

A general utility & sync app for BART (Bay Area Rapid Transit): trip planning, fare
calculation, live departures, and multiplayer **Train Sync** — coordinated itineraries so
two riders from different origins end up on the same train.

> **Disclaimer** — This app uses live BART API data to calculate the math for your
> commute. While we update every 10 seconds, transit is unpredictable. Always trust the
> physical platform signs, and when in doubt, cross-reference with official BART channels.

## Monorepo layout

```
apps/
  backend/        Node.js API + realtime engine (Express, socket.io, Redis, Postgres)
  web/            Next.js web portal                          (Phase 2)
  mobile/         React Native (Expo) app                     (Phase 3)
packages/
  bart-config/    Shared tsconfig, ESLint, and Prettier configuration
  bart-data/      Generated static BART data (stations, lines, timetable, fares)
  bart-math/      Pure transit logic: fares, trip planner, sync algorithm
```

All transit math lives in `@baybound/bart-math` as pure, deterministic functions —
`(static data, realtime snapshot, params) => result` — so the backend, web, and mobile
clients share a single implementation.

## Prerequisites

- Node.js 24+
- pnpm 10 (`corepack enable` or `npm install -g pnpm`)
- Docker (local Postgres + Redis)

## Getting started

```bash
pnpm install
cp .env.example .env   # demo BART API key works for development
docker compose up -d   # Postgres 16 + Redis 7
pnpm dev
```

## Workspace commands

| Command          | What it does                                 |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Run every app's dev server via Turborepo     |
| `pnpm build`     | Build all packages/apps                      |
| `pnpm test`      | Run all Vitest suites                        |
| `pnpm lint`      | ESLint across the workspace                  |
| `pnpm typecheck` | `tsc --noEmit` across the workspace          |
| `pnpm check`     | lint + typecheck + test + build (CI mirror)  |
| `pnpm format`    | Prettier write                               |

## Data sources

- BART Legacy API (`api.bart.gov`) — real-time departures, fares
- BART GTFS static (`bart.gov/dev/schedules/google_transit.zip`) — timetable, fare tables
- BART GTFS-RT — TripUpdates + ServiceAlerts (BART publishes no VehiclePositions feed;
  live train locations are derived from TripUpdates)

The backend polls BART once every 10 seconds and fans out to clients; clients never hit
BART APIs directly.

## Roadmap

- [x] **Phase 0** — monorepo scaffold (Turborepo, shared configs, CI, local services)
- [ ] **Phase 1** — `bart-data` pipeline, `bart-math` core, backend polling engine + sync sessions
- [ ] **Phase 2** — web portal (trip planner, fares, manual sync)
- [ ] **Phase 3** — mobile app (background geofencing, automated sync, push)
- [ ] **Phase 4** — optimization + accounts

## License

[GPL-3.0](LICENSE)
