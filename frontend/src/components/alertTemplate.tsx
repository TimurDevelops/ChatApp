import {Alert, AlertTitle} from "@mui/material";
import {ReactNode} from "react";

interface AlertTemplateProps {
  message: ReactNode
}

const AlertTemplate = ({message}: AlertTemplateProps) => (
  <Alert severity="info" sx={{p: "1em", m: "1em"}}>
    <AlertTitle>Операция выполнена</AlertTitle>
    {message}
  </Alert>
)


export default AlertTemplate;
