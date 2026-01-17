/* Load menu items from JSON */
fetch('../assets/menu.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const container = document.getElementById(item.category);

      if (!container) {
        console.warn(`Categoria non trovata: ${item.category}`);
        return;
      }

      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${item.name}</h3>
        <img src="../assets/images/menu/${item.image}" alt="${item.name}">
        <p>${item.description}</p>
        <p class="price">€${item.price}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading menu:', error));