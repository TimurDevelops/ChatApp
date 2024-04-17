import MessageItem from "./MessageItem";

import {Message} from "../../interfaces/Message";


interface MessageListProps {
  messages: Message[]
}

const MessageList = ({messages}: MessageListProps) => {
  return (
    <div>
      message list
      {
        messages.map((message: Message) => <MessageItem key={message.id} message={message}/>)
      }
    </div>
  );
}

export default MessageList;