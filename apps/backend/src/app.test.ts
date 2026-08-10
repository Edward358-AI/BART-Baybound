import type { AddressInfo } from "node:net";

import { describe, expect, it } from "vitest";

import { createApp } from "./app";
import { buildHealthPayload } from "./health";

describe("buildHealthPayload", () => {
  it("reports ok with a stable shape", () => {
    const payload = buildHealthPayload(new Date("2026-08-01T12:00:00Z"));
    expect(payload).toEqual({
      status: "ok",
      service: "baybound-backend",
      dataVersion: expect.any(String),
      time: "2026-08-01T12:00:00.000Z",
    });
  });
});

describe("GET /health", () => {
  it("responds 200 with the health payload", async () => {
    const server = createApp().listen(0);
    await new Promise<void>((resolve) => server.once("listening", resolve));
    try {
      const { port } = server.address() as AddressInfo;
      const res = await fetch(`http://127.0.0.1:${port}/health`);
      expect(res.status).toBe(200);
      const body = (await res.json()) as { status: string };
      expect(body.status).toBe("ok");
    } finally {
      server.close();
    }
  });
});
