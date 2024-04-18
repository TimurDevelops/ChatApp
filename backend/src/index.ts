import express from "express";
import cors from "cors";
import http from "http";

import messages from "./api/messages";
import wsServer from "./services/wsServer";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

const listener = http.createServer(app);
const wss = new wsServer()

app.use("/messages", messages(wss));

listener.listen(Number(PORT), () => {
  console.log(`Sever started on port ${PORT}`);
});
