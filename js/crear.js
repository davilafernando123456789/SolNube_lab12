// crear.js
document.addEventListener('DOMContentLoaded', async () => {
  const crearForm = document.getElementById('crear-contacto-form');
  crearForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const fecha_nac = document.getElementById('fecha_nac').value;
    const foto = document.getElementById('foto').files[0];

    const nuevoContacto = {
      nombre,
      apellidos,
      correo,
      fecha_nac,
      foto: null, // En este punto, podrías enviar la imagen al servidor y obtener la URL
    };

    // Llama a la función para crear un nuevo contacto
    const contactoCreado = await crearContacto(nuevoContacto);

    // Redirecciona a la página del nuevo contacto
    window.location.href = `/contactos/${contactoCreado.id}`;
  });
});
