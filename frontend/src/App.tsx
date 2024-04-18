import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'

import ChatApp from "./ChatApp";
import AlertTemplate from "./components/alertTemplate";


const queryClient = new QueryClient();

const alertOptions = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.FADE
}

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <ChatApp/>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default App;


