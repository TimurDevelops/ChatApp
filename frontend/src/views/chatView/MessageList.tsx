import {useQueryClient} from "@tanstack/react-query";
import {Container, Stack} from "@mui/material";
import {useAlert} from "react-alert";

import {Message} from "../../interfaces/Message";
import {useWss} from "../../services/websocket";
import MessageItem from "./MessageItem";
import {useEffect} from "react";


interface MessageListProps {
  messages: Message[],
}

const MessageList = ({messages}: MessageListProps) => {
  const alert = useAlert();
  const queryClient = useQueryClient();
  const wss = useWss();


  useEffect(() => {
    wss.on("message-deleted", async () => {
      alert.show("Сообщение успешно удалено");
      await queryClient.invalidateQueries({queryKey: ["messages"]});
    })
    wss.on("message-added", async () => {
      alert.show("Сообщение успешно добавлено");
      await queryClient.invalidateQueries({queryKey: ["messages"]})
    })
  }, [alert, queryClient, wss])


  return (
    <Container
      maxWidth="lg"
      sx={{pb: "2em", overflow: "auto", maxHeight: "90%"}}
    >

      <Stack spacing={2} sx={{overflow: "hidden"}}>
        {
          messages.map((message: Message) => <MessageItem key={message.id} message={message}/>)
        }
      </Stack>
    </Container>
  );
}

export default MessageList;