
function connectWebSocket() {

  const websocketClient=new WebSocket("wss://simple-socket-pychange.glitch.me/");
  websocketClient.onopen=function(message){
  console.log("client connected")
  };
  
  websocketClient.onclose = function(event) {
      console.log("Se ha cerrado la conexión");
      setTimeout(function() {
        console.log("Intentando reconectar...");
        connectWebSocket();
      }, 3000);
    };
  }
connectWebSocket();

