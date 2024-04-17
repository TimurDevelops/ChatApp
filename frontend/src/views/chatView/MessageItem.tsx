import {Message} from "../../interfaces/Message";

interface MessageItemProps {
  message: Message
}

const MessageItem = ({message}: MessageItemProps) => {
  return (
    <div>
      {message.text}
    </div>
  );
}

export default MessageItem;