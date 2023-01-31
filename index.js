import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  addNewDevice,
  getAllDevices,
  getDeviceData,
  toggleSwitch,
} from "./devices.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3002;

app.get("/devices", getAllDevices);
app.post("/devices", addNewDevice);
app.get("/fetch", async (req, res) => {
  toggleSwitch();
  const result = await getDeviceData();
  const data = await result.json();
  res.send(data);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));