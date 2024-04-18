import {useQuery} from "@tanstack/react-query";
import {Backdrop, Box, CircularProgress, Grid} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import ChatView from "./views/chatView/ChatView";

import {fetchMessages} from "./api/messages";

import "./App.css";


const ChatApp = () => {
  const {data: messages, isLoading, error} = useQuery({
    queryKey: ["messages"],
    queryFn: () => fetchMessages()
  })


  if (error) {
    return <div>Произошла ошибка...</div>;
  }

  return (
    <>
      <CssBaseline/>
      <Box>
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit"/>
        </Backdrop>
      </Box>
      <Box sx={{bgcolor: "#262626"}}>
        <Container maxWidth="xl" component="main">
          <Grid
            sx={{bgcolor: "#494848", height: "100vh", padding: "1em"}}
            container
            direction="column"
            justifyContent="flex-end"
          >
            <ChatView messages={messages || []}/>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ChatApp;
