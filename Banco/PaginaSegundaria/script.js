function formula() {
    var CantidadT = parseInt(document.getElementById('Cant').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value); 
    var Cantidad2 = parseInt(document.getElementById('c2').value); 
    document.getElementById('c1').value = (Cantidad1 - CantidadT);
    document.getElementById('c2').value = (Cantidad2 + CantidadT); 
}

function formula2() {
    var CantidadT = parseInt(document.getElementById('Cant').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value); 
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (Cantidad1 + CantidadT); 
    document.getElementById('c2').value = (Cantidad2 - CantidadT); 
}
function formula3() {
    var CantidadT = parseInt(document.getElementById('Cant').value); 
    var Cantidad1 = parseInt(document.getElementById('c1').value); 
    document.getElementById('c1').value = (Cantidad1 + CantidadT); 
}

function formula4() {
    var CantidadT = parseInt(document.getElementById('Cant').value); 
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (Cantidad2 + CantidadT);
}

function formula5() {
    var CantidadT = parseInt(document.getElementById('Cant').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value); 
    document.getElementById('c1').value = (Cantidad1 - CantidadT); 
}

function formula6() {
    var CantidadT = parseInt(document.getElementById('Cant').value); 
    var Cantidad2 = parseInt(document.getElementById('c2').value); 
    document.getElementById('c2').value = (Cantidad2 - CantidadT);
}


const btnPago = document.querySelector("#btn-pago");

btnPago.addEventListener("click", function () {
  window.location.href = "https://registro.pse.com.co/PSEUserRegister/"; // Reemplaza "https://www.ejemplo.com" con la URL que desees
});
