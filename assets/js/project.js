
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

    const elementoPadreQuestion = document.getElementById('box');

    // Crea el contenido personalizado para el <p>
    const contenidoPersonalizadoQuestion = input;

    // Inserta el HTML en la posición 'beforeend' (al final del elemento padre)
    elementoPadreQuestion.insertAdjacentHTML('beforeend', `
        <div class="item right">
            <div class="msg">
                <p id="p3" class="p">${contenidoPersonalizadoQuestion}</p>
            </div>
        </div>
        <br clear="both">
        <br>
    `);
    elementoPadreQuestion.scrollTop = elementoPadreQuestion.scrollHeight;




    document.getElementById('paquete').value='';
    websocketClient.send("1"+input);
    
    var submit_boton= document.getElementById("boton");
    submit_boton.disabled = true;
};


websocketClient.addEventListener('message', (event) => {
var post2=event.data;
//console.log(post2);

var input2 = document.getElementById("paquete").value;
    




const elementoPadre = document.getElementById('box');

// Crea el contenido personalizado para el <p>
const contenidoPersonalizado = post2;

// Inserta el HTML en la posición 'beforeend' (al final del elemento padre)
elementoPadre.insertAdjacentHTML('beforeend', `
    <div class="item">
        <div class="msg">
            <p id="p3" class="p">${contenidoPersonalizado}</p>
        </div>
    </div>
    <br clear="both">
    <br>
`);
elementoPadre.scrollTop = elementoPadre.scrollHeight;











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
