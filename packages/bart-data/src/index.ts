/**
 * @baybound/bart-data — static BART system data.
 *
 * Phase 1a populates `generated/` with JSON emitted from BART's GTFS feed
 * (stations, lines, timetable, fares) via the refresh script. Until then this
 * package only ships the shared shape of that data.
 */

/** BART's official four-letter station abbreviation, e.g. "EMBR", "MCAR". */
export type StationId = string;

export interface Station {
  id: StationId;
  name: string;
  latitude: number;
  longitude: number;
  /** True for stations where riders can transfer between lines. */
  isTransfer: boolean;
  /** Suggested circular geofence radius in meters (mobile, Phase 3). */
  geofenceRadiusM: number;
}

/** Version of the generated dataset; placeholder until the Phase 1a pipeline lands. */
export const DATA_VERSION = "0.0.0-placeholder";
