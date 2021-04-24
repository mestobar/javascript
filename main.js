function generadatos() {

    var fecha = new Date();
    var anioactual = fecha.getFullYear();
    var anionacimiento = parseInt(document.getElementById('fecha').value);
    var edad = anioactual - anionacimiento;

    var datosamostrar = "Bienvenidos " + document.getElementById('nombre').value + ", su edad  es " + edad + "años tu vives en " + document.getElementById('direccion').value;


    document.getElementById('texto').innerText = datosamostrar;

}