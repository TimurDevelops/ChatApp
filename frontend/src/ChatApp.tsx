import {useQuery, useMutation} from "@tanstack/react-query";
import {Backdrop, Box, CircularProgress} from "@mui/material";

import ChatView from "./views/chatView/ChatView";

import {addMessage, fetchMessages} from "./api/messages";

import './App.css';


const ChatApp = () => {
  const {data: messages, isLoading, error} = useQuery({
    queryKey: ["messages"],
    queryFn: () => fetchMessages()
  })

  const {mutate: addTodoMutation} = useMutation({
    mutationFn: addMessage
  })

  console.log(isLoading)
  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Произошла ошибка...</div>;
  }

  return (
    <>
      <div>
        <Backdrop
          sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
          open={isLoading}
        >
          <CircularProgress color="inherit"/>
        </Backdrop>
      </div>

      <Box component="main">
        <ChatView messages={messages || []}/>
      </Box>
    </>
  );
}

export default ChatApp;
