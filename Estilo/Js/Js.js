// obtenemos todos los elementos del menú
const menuItems = document.querySelectorAll('.Footer');

// obtenemos la URL actual
const currentUrl = window.location.href;

// recorremos los elementos del menú
menuItems.forEach((menuItem) => {
  // obtenemos el enlace del elemento del menú
  const link = menuItem.querySelector('a');

  // si el enlace coincide con la URL actual, agregamos la clase activa
  if (link.href === currentUrl) {
    menuItem.classList.add('active');
  }
});

// Selecciona el input de búsqueda
const buscadorInput = document.querySelector('.search-bar input[type="search"]');

// Agrega un evento de clic al input
buscadorInput.addEventListener('click', () => {
  // Redirige a la página "Buscador.html"
  window.location.href = 'Buscador.html';
});