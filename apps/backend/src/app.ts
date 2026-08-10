import express from "express";

import { buildHealthPayload } from "./health";

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json(buildHealthPayload());
  });

  return app;
}
