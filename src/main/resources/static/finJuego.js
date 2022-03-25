
function mostrar_json()
{
     let inputNombre =  "[[${jugador.nombre}]]";
     let inputApellidos =  "[[${jugador.apellidos}]]";
     let inputEdad = "[[${jugador.edad}]]";
     let inputNivel=  "[[${juego.nivel}]]";
     let inputAciertos = "[[${juego.aciertos}]]";

     let jugador = [];
     let juego = [];
     let obj = {};

     jugador.push(
     {
        "nombre" : inputNombre,
        "apellidos" :inputApellidos,
        "edad" : inputEdad,
     })
     juego.push(
     {
         "nombre" : inputNivel,
         "apellidos" :inputAciertos,
     });

     obj.jugador = jugador;
     obj.juego = juego;

     document.getElementById('json').innerHTML =JSON.stringify(obj, null, '\t');


     setTimeout(function(){hola();}, 1000)
}

let info;
function mostrarInfo(){

try{
    fetch("/mostrarInfo", {
       method: "GET",
       headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       },
    })
    .then(res => {
          if(res.ok){
            res.json();
            console.log(res);
          }else{
            throw res;
          }
        })

    .then(r => {
          console.log(r);
          info = r;
          let jugador =info.jugador;
          document.getElementById('nombre').innerHTML=jugador.getNombre;
              document.getElementById('apellidos').innerHTML=jugador.getApellidos();
              document.getElementById('edad').innerHTML=r.edad;
              document.getElementById('nivel').innerHTML=r.nivel;
              document.getElementById('aciertos').innerHTML=r.aciertos + '/5';


        })

    .catch(err => {
        console.error(err);
    });

} catch (e)
    {
        console.error(e.message);
    }
    return false;
}

function rellenarInfo(r)
{
    /*document.getElementById('nombre').innerHTML=r.nombre;
    document.getElementById('apellidos').innerHTML=r.apellidos;
    document.getElementById('edad').innerHTML=r.edad;
    document.getElementById('nivel').innerHTML=r.nivel;
    document.getElementById('aciertos').innerHTML=r.aciertos + '/5';*/

    let informacion = '';

informacion='<h1 id="nombre">'+r.nombre+'</h1><br><h1 id="apellidos">${r.apellidos}</h1><br><h1 id="edad">${r.edad}</h1><br><h1 id="nivel">${r.nivel}</h1><br><h1 id="aciertos">${r.aciertos}</h1><br>';
        document.getElementById("informacion").innerHTML = informacion;

    return false;
}