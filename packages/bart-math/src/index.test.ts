import { describe, expect, it } from "vitest";

import { DEFAULT_SYNC_PADDING, minutesBetween } from "./index";

describe("minutesBetween", () => {
  it("returns signed fractional minutes", () => {
    const a = new Date("2026-08-01T09:00:00Z");
    const b = new Date("2026-08-01T09:07:30Z");
    expect(minutesBetween(a, b)).toBe(7.5);
    expect(minutesBetween(b, a)).toBe(-7.5);
  });
});

describe("DEFAULT_SYNC_PADDING", () => {
  it("keeps a coherent 5–8 minute window", () => {
    expect(DEFAULT_SYNC_PADDING.minMinutes).toBeGreaterThan(0);
    expect(DEFAULT_SYNC_PADDING.minMinutes).toBeLessThan(DEFAULT_SYNC_PADDING.maxMinutes);
  });
});
