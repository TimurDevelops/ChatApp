import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

import {Message} from "../../interfaces/Message";

interface ChatViewProps {
  messages: Message[]
}

const ChatView = (data: ChatViewProps) => {
  return (
    <section>
      <MessageList messages={data.messages}/>
      <MessageForm/>
    </section>
  );
}

export default ChatView;