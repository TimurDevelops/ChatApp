const socket = new WebSocket("ws://localhost:8080");

class wsService {
  callbacks: Map<string, Function>
  socket?: WebSocket

  constructor() {
    this.callbacks = new Map()

    if (!this.socket) {
      this.socket = socket;

      this.socket.addEventListener("message", async (event) => {
        const data = JSON.parse(event.data);

        const callback = this.callbacks.get(data.eventType)
        if (callback) await callback(data)
      });
    }
  }

  on(event: string, callback: Function) {
    this.callbacks.set(event, callback)
  }
}

const wss = new wsService()

export const useWss = () => {
  return wss
};