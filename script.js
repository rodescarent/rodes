function flashButton(btn) {
  document.querySelectorAll('.menu-header button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active', 'flash');
  setTimeout(() => btn.classList.remove('flash'), 300);
}

function mostrarClientes(btn) {
  flashButton(btn);
  const contenido = document.getElementById('contenidoPrincipal');
  contenido.innerHTML = `
    <h2>Formulario de Clientes</h2>
    <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLSdNAVWe_XU250gi8TOhlVSJOeiRgRtzZMWXGuC-5VuMUSW89A/viewform?embedded=true" 
      width="100%" 
      height="600" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      Cargando…
    </iframe>`;
}

function mostrarAdmin(btn) {
  flashButton(btn);
  const password = prompt("Introduce la contraseña de administrador:");
  if (password === "1234") {
    const contenido = document.getElementById('contenidoPrincipal');
    contenido.innerHTML = `
      <h2>Panel del Administrador</h2>
      <ul class="listaFormularios">
        <li><a href="#" onclick="abrirFormulario(1)">Informacion de viaje</a></li>
        <li><a href="#" onclick="abrirFormulario(2)">Antes de entrega y recogida</a></li>
        <li><a href="#" onclick="abrirFormulario(3)">Chequeo diario</a></li>
      </ul>`;
  } else if (password) {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}

function abrirFormulario(num) {
  const urls = {
    1: "https://docs.google.com/forms/d/e/1FAIpQLSeHDPT5Vbid6dp31DemdUrQAoYY5UaW6vSY-_82jbyvYIeF2Q/viewform?embedded=true",
    2: "https://docs.google.com/forms/d/e/1FAIpQLScMUPKO2RCiqvmlnLAPAogI3muDlw3ZJo7_uZkxmUIjhZFr9A/viewform?embedded=true",
    3: "https://docs.google.com/forms/d/e/1FAIpQLSeWLbd-a2hN4Rkd4KTUm-wJ152xIyvUp-WG7j6FFbHyaEdjtg/viewform?embedded=true"
  };

  const contenido = document.getElementById('contenidoPrincipal');
  contenido.innerHTML = `
    <h2>${'Formulario ' + num}</h2>
    <iframe 
      src="${urls[num]}" 
      width="100%" 
      height="600" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      Cargando…
    </iframe>`;
}
