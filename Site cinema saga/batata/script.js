document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    // Pega a largura do primeiro slide (considerando margens)
    // A margem agora é 10px de cada lado, totalizando 20px
    const slideWidth = slides[0].getBoundingClientRect().width + 20;

    let currentIndex = 0;

    // Função para mover o slide
    const moveToSlide = (targetIndex) => {
        // Limita o movimento para não passar dos slides existentes
        if (targetIndex < 0) {
            targetIndex = 0;
        } else if (targetIndex > slides.length - 1) {
            targetIndex = slides.length - 1;
        }
        
        track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
        currentIndex = targetIndex;
    };

    // Evento para o botão "Próximo"
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    // Evento para o botão "Anterior"
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });
});