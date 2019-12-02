import { handleAlertInfo } from "../actions";

const websocket = () => {
  let ws = new WebSocket("ws://mapalertunifapapi.herokuapp.com/ws/alertas/");
  ws.onopen = event => {
    console.log("WebSocket conectado");
  };

  ws.onmessage = event => {
    data = JSON.parse(event.data);
    handleAlertInfo();
  };

  ws.onclose = event => {
    console.disconnect();
  };
};