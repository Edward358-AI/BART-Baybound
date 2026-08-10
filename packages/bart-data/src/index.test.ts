import { describe, expect, it } from "vitest";

import { DATA_VERSION } from "./index";

describe("bart-data", () => {
  it("exposes a semver-shaped dataset version", () => {
    expect(DATA_VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
