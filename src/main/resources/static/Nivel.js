
const inputNombre = document.getElementById("nombre");
const inputApellidos = document.getElementById("apellidos");
const inputEdad = document.getElementById("edad");

function validarFormulario()
{
    try
    {

        const datosJugador = {
            nombre: inputNombre.value,
            apellidos :inputApellidos.value,
            edad:inputEdad.value,
        } ;;

       fetch("/EnviarFormularioJugador", {
           method: "POST",
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(datosJugador),
           dataType: "json",
        })

        .then(response=> {
            response.json();
            console.log(response);
            if(response.status==200)
            {
                console.log("OK");
                document.location.href="../facil.html";
            } else {
                 document.location.href="../Nivel.html";
                 alert("Rellene todos los campos como se le inidica");
             }
       })


    } catch (e)
    {
        console.error(e.message);
    }
    return false;
}
