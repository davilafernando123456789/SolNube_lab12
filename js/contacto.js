// contacto.js
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    // Obtiene la información del contacto
    const contacto = await obtenerContactoPorId(id);
  
    // Renderiza la información del contacto en la página (puedes ajustar según tu HTML)
    const contactoDetalle = document.getElementById('contacto-detalle');
    contactoDetalle.innerHTML = `
      <h2>${contacto.nombre} ${contacto.apellidos}</h2>
      <p>Correo: ${contacto.correo}</p>
      <p>Fecha de Nacimiento: ${contacto.fecha_nac}</p>
      <img src="${contacto.foto}" alt="${contacto.nombre} ${contacto.apellidos}">
      <a href="/contactos/${id}/editar">Editar</a>
    `;
  });
  