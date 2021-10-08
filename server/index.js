import express, { json, urlencoded } from "express";
import { join } from "path";
import path from "path";
import router from "./routes/index.js";
import { config } from "dotenv";

const app = express(); // create express app
config();
const __dirname = path.resolve();

// add middlewares
app.use(json({ limit: "50mb" }));
app.use(express.static(join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(urlencoded({ limit: "50mb", extended: true }));

// routes
app.use("/api", router);

// serve react build files
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
