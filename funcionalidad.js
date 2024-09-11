// script.js

const form = document.getElementById('deportista-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const category = document.getElementById('category').value;
  const image = document.getElementById('image').files[0];

  if (!name || !surname || !category || !image) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Aquí puedes agregar lógica para enviar los datos del formulario al servidor
  console.log('Nombre:', name);
  console.log('Apellido:', surname);
  console.log('Categoría:', category);
  console.log('rama:', rama);
  console.log('mes-a-pagar:', month);
  console.log('Imagen:', image);

  alert('Formulario enviado correctamente.');
  form.reset();
});