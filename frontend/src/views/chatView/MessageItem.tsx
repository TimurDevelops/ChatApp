import {useMutation} from "@tanstack/react-query";
import {Card, Box, CardContent, Typography, CardActions, IconButton} from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

import {deleteMessage} from "../../api/messages";
import {Message} from "../../interfaces/Message";

interface MessageItemProps {
  message: Message,
}

const MessageItem = ({message}: MessageItemProps) => {
  const {mutate: deleteMessageMutation} = useMutation({
    mutationFn: deleteMessage,
  })

  return (
    <Box display="inline-block">
      <Card sx={{display: "inline-flex"}}>
        <CardContent>
          <Typography>
            {message.text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="fingerprint" color="error" onClick={() => {
            deleteMessageMutation(message)
          }}>
            <BackspaceIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MessageItem;