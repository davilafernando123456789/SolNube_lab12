// editar.js
document.addEventListener('DOMContentLoaded', async () => {
    const editarForm = document.getElementById('editar-contacto-form');
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    // Obtiene la información del contacto a editar
    const contacto = await obtenerContactoPorId(id);
  
    // Rellena el formulario con los datos actuales del contacto
    // (Suponiendo que tienes campos en el formulario con id: nombre, apellidos, correo, fecha_nac)
    document.getElementById('nombre').value = contacto.nombre;
    document.getElementById('apellidos').value = contacto.apellidos;
    document.getElementById('correo').value = contacto.correo;
    document.getElementById('fecha_nac').value = contacto.fecha_nac;
  
    editarForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const apellidos = document.getElementById('apellidos').value;
      const correo = document.getElementById('correo').value;
      const fecha_nac = document.getElementById('fecha_nac').value;
  
      const contactoActualizado = {
        nombre,
        apellidos,
        correo,
        fecha_nac,
      };
  
      // Llama a la función para actualizar el contacto
      await actualizarContacto(id, contactoActualizado);
  
      // Redirecciona a la página del contacto actualizado
      window.location.href = `/contactos/${id}`;
    });
  });
  