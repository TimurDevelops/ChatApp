import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

import {Message} from "../../interfaces/Message";

interface ChatViewProps {
  messages: Message[],
}

const ChatView = ({messages}: ChatViewProps) => {
  return (
    <>
      <MessageList messages={messages}/>
      <MessageForm/>
    </>
  );
}

export default ChatView;