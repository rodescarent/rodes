// Contraseña por defecto
const CLAVE_ADMIN = "claveadmin123";

function entrarVisitante() {
  localStorage.setItem("rol", "visitante");
  mostrarZona();
}

function loginAdmin() {
  const pass = prompt("Ingrese la contraseña de administrador:");
  if (pass === CLAVE_ADMIN) {
    localStorage.setItem("rol", "admin");
    mostrarZona();
  } else {
    alert("❌ Contraseña incorrecta");
  }
}

function mostrarZona() {
  const rol = localStorage.getItem("rol");
  const zonaVisitante = document.getElementById("zonaVisitante");
  const zonaAdmin = document.getElementById("zonaAdmin");

  // Ocultamos ambas zonas
  zonaVisitante.classList.add("oculto");
  zonaAdmin.classList.add("oculto");

  if (rol === "visitante") {
    zonaVisitante.classList.remove("oculto");
  } else if (rol === "admin") {
    zonaAdmin.classList.remove("oculto");
  }
}

function cerrarSesion() {
  localStorage.removeItem("rol");
  location.reload();
}

// Mantiene sesión si se recarga la página
window.onload = mostrarZona;