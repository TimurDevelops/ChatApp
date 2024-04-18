import { v4 as uuidv4 } from "uuid";
import {WebSocketServer} from "ws";

class wsServer {
  private connections: Map<string, WebSocket>;
  private wsServer: WebSocketServer;

  constructor() {
    this.connections = new Map();
    this.wsServer = new WebSocketServer({ port: 8080 });
    this.wsServer.on("connection", (ws: WebSocket) => this.connect(ws));
  }

  connect(ws: WebSocket){
    const connectionId = uuidv4()
    this.connections.set(connectionId, ws)
    ws.onclose = () => this.disconnect(connectionId)
  }

  disconnect(connectionId: string){
    this.connections.delete(connectionId)
  }

  // emit(id: string, message: object){
  //   const socket = this.connections.get(id)
  //   socket?.send(JSON.stringify(message))
  // }

  broadcast(message: object){
    this.connections.forEach((socket) => {
      socket.send(JSON.stringify(message))
    })
  }
}


export default wsServer;

