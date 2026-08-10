/**
 * @baybound/bart-math — pure transit logic shared by backend, web, and mobile.
 *
 * Everything in this package must stay deterministic and side-effect free:
 * (static data, realtime snapshot, params) => result. Phase 1b adds the fare
 * calculator, trip planner, train position derivation, and the sync algorithm.
 */

/** Default padding window for Train Sync planning (architecture doc §6). */
export const DEFAULT_SYNC_PADDING = {
  minMinutes: 5,
  maxMinutes: 8,
} as const;

/** Signed fractional minutes from `from` to `to`. */
export function minutesBetween(from: Date, to: Date): number {
  return (to.getTime() - from.getTime()) / 60_000;
}
