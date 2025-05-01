function guardar(){
    validar();
}
function validar (){
   let nombre = document.getElementById("id_nombre").value;
    if(nombre ===""){
        console.log("Error, no ingreso nombre, campo vacio");
    } else {
        console.log("");
    }
}