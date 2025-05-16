# Connecting to Websocket

Nerimity Uses [Socket.IO](https://socket.io/) with only the `"websocket"` transport enabled.

To connect to the WebSocket Server, you can use the following URL:

```
WS https://nerimity.com
```

You can use the [SocketIO Client](https://socket.io/docs/) to connect to the WebSocket Server.

## Example

```js
import io from "socket.io-client";

const socket = io("https://nerimity.com", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  socket.emit("user:authenticate", { token: "YOUR_TOKEN" });
});

socket.on("user:authenticated", (payload) => {
  console.log(payload);
});
```
