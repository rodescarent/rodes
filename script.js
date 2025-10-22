function accederAdmin() {
  const password = prompt("Introduce la contraseña de administrador:");
  if (password === "1234") { // contraseña temporal
    document.getElementById("zonaAdmin").style.display = "block";
    document.getElementById("botonAdmin").style.display = "none";
    alert("Acceso concedido al panel del administrador.");
  } else if (password) {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}
