/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2022 - parseInt(prompt("Ingresa el año que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa Javascript?");
  if (datosPersona.interesPorJs === true) {
    datosPersona.interesPorJs = "Si";
  } else {
    datosPersona.interesPorJs = "No";
  };
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const datosUsuario = document.getElementById('nombre');
  datosUsuario.innerText = datosPersona.nombre;
  const edad = document.getElementById('edad');
  edad.innerText = datosPersona.edad;
  const ciudad = document.getElementById('ciudad');
  ciudad.innerText = datosPersona.ciudad;
  const interes = document.getElementById('javascript');
  interes.innerText = datosPersona.interesPorJs;
  
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const tarjetas = document.getElementById('fila');
  tarjetas.innerHTML = '';
  
  listado.forEach(materia => {
    tarjetas.innerHTML += `
    <div class="caja">
    <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
    <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
    <p class="bimestre">Bimestre: ${materia.bimestre}</p>
    </div>
    `
  })

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById('sitio').classList.toggle('dark');



}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keydown", function(event) {
  if(event.key == "f") {
    document.querySelector('#sobre-mi').classList.remove('oculto');
  }
})
