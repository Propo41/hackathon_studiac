import express, { json, urlencoded } from "express";
import { join } from "path";
import path from "path";
import router from "./routes/index.js";
import { config } from "dotenv";
import cors from "cors";

const app = express(); // create express app
config({ path: "../.env" });
const __dirname = path.resolve();

// add middlewares
if (process.env.NODE_ENV === "development") {
  app.use(cors());
}
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

// start express server on port 5000 or heroku port
app.listen(process.env.PORT || 5000, () => {
  console.log(`server started on port : ${process.env.PORT || 5000}`);
  console.log("http://localhost:5000");
});
