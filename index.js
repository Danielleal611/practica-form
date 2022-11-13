function Confirmar(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let contraseña2 = document.getElementById("contraseña2").value;

    if(usuario.length == 0 || usuario.length<= 5){
        alert("El nombre de usuario debe tener minimo 6 caracteres");
        document.getElementById("usuario").value = "";

    }
    if (contraseña != contraseña2){
        alert("las contraseñas no coinciden, intenta de nuevo.");
        document.getElementById("contraseña").value = "";
        document.getElementById("contraseña2").value = "";
        
    }
    
}