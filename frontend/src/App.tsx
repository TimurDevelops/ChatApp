import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import ChatApp from "./ChatApp";

import './App.css';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ChatApp/>
    </QueryClientProvider>
  );
}

export default App;


