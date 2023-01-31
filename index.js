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

// // useEffect(() => {
//     // fetch("http://192.168.15.35/#/json")
//     fetch("http://192.168.15.35/rpc/Switch.GetStatus?id=0")
//     // fetch("http://localhost:8000/posts")
//     .then(res => {
//       return res.json()
//     })
//     .then((data) => {
//       console.log(data)
//     //   setPosts(data)
//     })
// //   }, [])


app.get("/devices", getAllDevices);
app.post("/devices", addNewDevice);
app.get("/fetch", async (req, res) => {
  toggleSwitch();
  const result = await getDeviceData();
  const data = await result.json();
  res.send(data);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));
