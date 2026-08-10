import { DATA_VERSION } from "@baybound/bart-data";

export interface HealthPayload {
  status: "ok";
  service: "baybound-backend";
  dataVersion: string;
  time: string;
}

export function buildHealthPayload(now: Date = new Date()): HealthPayload {
  return {
    status: "ok",
    service: "baybound-backend",
    dataVersion: DATA_VERSION,
    time: now.toISOString(),
  };
}
