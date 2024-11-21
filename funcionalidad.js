document.getElementById('deportista-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  // Convertir FormData a objeto para enviar en formato JSON
  const data = {
      name: formData.get('name'),
      surname: formData.get('surname'),
      category: formData.get('category'),
      rama: formData.get('rama'),
      mes: formData.get('mes'),
      // Agrega el manejo de imagen según el backend que uses, este es solo un ejemplo:
      image: formData.get('image') // Esto puede requerir ajustes dependiendo del backend
  };

  fetch('http://localhost:3000/registro', { // Ajusta la URL según tu configuración
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      alert('Registro exitoso');
      // Aquí podrías agregar lógica para manejar la respuesta del servidor
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al registrar los datos');
  });
});
