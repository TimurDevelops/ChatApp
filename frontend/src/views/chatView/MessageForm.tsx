import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {Card, Container, Grid, IconButton, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import {addMessage} from "../../api/messages";


const MessageForm = () => {
  const [messageText, setMessageText] = useState("")

  const {mutate: addMessageMutation} = useMutation({
    mutationFn: addMessage,
  })


  return (
    <Container maxWidth="lg">
      <form onSubmit={(e) => {
        e.preventDefault()
        if (!messageText) return;
        addMessageMutation({text: messageText})
      }}>

        <Card sx={{borderRadius: "5em", padding: "1em 2em"}}>
          <Grid
            container
            direction="row"
            justifyContent="center"
          >
            <Grid item xs={true} sx={{flexGrow: 1}}>
              <TextField fullWidth id="standard-basic" label="Введите ваше сообщение..." variant="standard"
                         value={messageText} onChange={e => setMessageText(e.target.value)}/>
            </Grid>

            <IconButton aria-label="fingerprint" color="primary" type="submit">
              <SendIcon/>
            </IconButton>
          </Grid>

        </Card>
      </form>
    </Container>
  );
}

export default MessageForm;