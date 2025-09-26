document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Carregar informações do filme da URL ---
    const params = new URLSearchParams(window.location.search);
    const movieTitle = params.get('filme');
    const movieImgSrc = params.get('img');

    if (movieTitle && movieImgSrc) {
        document.getElementById('movie-title').textContent = movieTitle;
        document.getElementById('movie-poster').src = movieImgSrc;
        document.getElementById('movie-poster').alt = `Pôster do filme ${movieTitle}`;
    }

    // --- 2. Lógica do seletor de quantidade ---
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantitySpan = document.getElementById('quantity');
    let currentQuantity = 1;

    increaseBtn.addEventListener('click', () => {
        if (currentQuantity < 8) {
            currentQuantity++;
            quantitySpan.textContent = currentQuantity;
        }
    });

    decreaseBtn.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantitySpan.textContent = currentQuantity;
        }
    });

    // --- 3. Lógica da janela flutuante (Modal) ---
    const buyButton = document.getElementById('buy-button');
    const modal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Abre o modal ao clicar em "Comprar"
    buyButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    
    // Fecha o modal e redireciona para o YouTube
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});