import useWebSocket from "react-use-websocket";
interface IStruct {
  text: string;
  type: "success" | "error";
}

interface INotification {
  notification: IStruct;
}
export function Toast() {
  const { lastJsonMessage } = useWebSocket<INotification>(
    "ws://localhost:5000/ws",
    {
      onOpen: () => console.log("connect to app WS"),
      onMessage: () => {
        if (
          lastJsonMessage &&
          lastJsonMessage.notification &&
          lastJsonMessage.notification.text
        ) {
          const notyf = new window.Notyf({
            position: { x: "right", y: "top" },
            duration: 0,
            types: [
              {
                type: "success",
                background: "green",
                dismissible: true,
              },
              {
                type: "error",
                background: "red",
                dismissible: true,
              },
            ],
          });

          notyf.open({
            type: lastJsonMessage.notification.type,
            message: lastJsonMessage.notification.text,
          });
        }
      },
      queryParams: { token: localStorage.getItem("token") || "" },
      onError: (err) => console.error(err),
      shouldReconnect: () => true,
      reconnectInterval: 6000,
    }
  );
  return (
    <h1>
      <h2>aa</h2>
    </h1>
  );
}
