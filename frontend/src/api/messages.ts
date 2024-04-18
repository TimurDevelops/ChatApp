import api from "./index";
import {Message} from "../interfaces/Message";

export const fetchMessages = async (): Promise<Message[]> => {
  const res = await api.get("/messages");
  if (res.data.success === true) {
    return res.data.messages;
  } else {
    throw Error("Не удалось получить сообщения")
  }
}

export const addMessage = async (message: Pick<Message, "text">): Promise<Message> => {
  const res = await api.post("/messages", message);
  if (res.data.success === true) {
    return res.data.messages;
  } else {
    throw Error("Не добавить сообщение")
  }
}

export const deleteMessage = async (message: Message): Promise<Message> => {
  const res = await api.delete("/messages", {data: message});
  if (res.data.success === true) {
    return res.data.messages;
  } else {
    throw Error("Не удалить сообщение")
  }
}