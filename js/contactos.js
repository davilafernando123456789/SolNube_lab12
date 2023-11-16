// contactos.js
document.addEventListener('DOMContentLoaded', async () => {
    // Obtiene la lista de contactos
    const contactosLista = document.getElementById('contactos-lista');
    const contactos = await obtenerContactos();
  
    // Renderiza la lista de contactos en la página (puedes ajustar según tu HTML)
    contactosLista.innerHTML = '';
    contactos.forEach((contacto) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="/contactos/${contacto.id}">
          ${contacto.nombre} ${contacto.apellidos}
        </a>
      `;
      contactosLista.appendChild(listItem);
    });
  });
  