import {Message} from "../interfaces/Message";

const messages: Message[] = [{
  id: 1,
  text: "First message"
}, {
  id: 2,
  text: "Second message"
}, {
  id: 3,
  text: "Third message"
}, {
  id: 4,
  text: "Fourth message"
}, {
  id: 5,
  text: "Fifth message"
}];

export const fetchMessages = async (): Promise<Message[]> => {
  // TODO call the backend
  await new Promise((resolve) => setTimeout(resolve, 1000*60));
  return messages;
};

export const addMessage = async (message: Pick<Message, "text">): Promise<Message> => {
  // TODO call the backend
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return message;
};