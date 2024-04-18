import { v4 as uuidv4 } from "uuid";
import express from "express";
import {Message} from "../interfaces/Message";
import wsServer from "../services/wsServer";

const router = express.Router();


export default (wss: wsServer) => {
  let messages: Message[] = [{
    id: "1",
    text: "Первое сообщение"
  }, {
    id: "2",
    text: "Второе сообщение"
  }, {
    id: "3",
    text: "Третье сообщение"
  }, {
    id: "4",
    text: "Четвертое сообщение"
  }, {
    id: "5",
    text: "Пятое сообщение"
  }];

  router.get(
    "/",
    async (_req, res) => {
      return res.json({messages, success: true});
    }
  )

  router.post(
    "/",
    async (req, res) => {
      const message: Pick<Message, "text"> = req.body;

      messages.push({id: uuidv4(), ...message});
      wss.broadcast({eventType: "message-added", data: {message}});

      return res.json({message, success: true});
    }
  )

  router.delete(
    "/",
    async (req, res) => {
      const message: Message = req.body;

      messages = messages.filter(item => item.id !== message.id);

      wss.broadcast({eventType: "message-deleted", data: {message}});
      return res.json({message, success: true});
    }
  )

  return router
}
