
var frase="";

function connectWebSocket() {

const websocketClient=new WebSocket("wss://simple-socket-pychange.glitch.me/");

const sendMessageButton=document.querySelector("[name=send_message_button2]");

websocketClient.onopen=function(message){
  
console.log("client connected");

document.getElementById('boton').style.display = 'block';
document.getElementById('load_server').style.color = 'blue';

var p = document.getElementById("load_server");
p.innerHTML = "Connected";


sendMessageButton.onclick=function(){
    var input = document.getElementById("paquete").value;


    var p_1 = document.getElementById("p3");
    p_1.innerHTML = "";
    websocketClient.send("4"+input);
    

    document.getElementById('paquete').value='';
    document.getElementById('paquete2').value='';
    
    
    
    var submit_boton= document.getElementById("boton");
    submit_boton.disabled = true;
};


websocketClient.addEventListener('message', (event) => {
var post2=event.data;
//console.log(post2);
    

var p = document.getElementById("p3");
frase=post2+"<br>"+"<br>";
p.innerHTML = frase.replace(/\n/g, '<br>');

//document.getElementById("p3").innerHTML = post2;
console.log('Message from server ', event.data);

var submit_boton= document.getElementById("boton");
submit_boton.disabled = false;

});

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
