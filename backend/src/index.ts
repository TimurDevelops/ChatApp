import { createServer } from "node:http";

const hostname = process.env.HOSTNAME || "127.0.0.1";
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// import express, { Request, Response } from "express";
// import dotenv from "dotenv";
//
// dotenv.config();
// const app = express();
//
// const PORT = process.env.PORT || 3000;
//
// app.get("/", (request: Request, response: Response) => {
//   response.status(200).send("Hello World");
// });
//
// app.listen(PORT, () => {
//   console.log("Server running at PORT: ", PORT);
// }).on("error", (error) => {
//   throw new Error(error.message);
// });
