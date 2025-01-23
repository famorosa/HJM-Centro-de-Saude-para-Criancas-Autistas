
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

// Adiciona evento de clique para abrir/fechar o menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Impede o scroll quando o menu estiver aberto
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
    }
});






// Adiciona animação ao scroll (opcional)
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    heroContent.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    heroImage.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});


// Seleciona os elementos para animar
const heroContent = document.querySelector('.hero-content');

// Configuração do Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            heroContent.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

// Observa a seção hero
observer.observe(heroContent);







//serviços
// Seleciona os botões "Ler Mais"
const readMoreButtons = document.querySelectorAll('.read-more');

// Adiciona evento de clique para abrir o modal correspondente
readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetModalId = button.getAttribute('data-target'); // Obtém o ID do modal
    const targetModal = document.getElementById(targetModalId); // Seleciona o modal
    if (targetModal) {
      targetModal.style.display = 'flex'; // Mostra o modal
    }
  });
});

// Seleciona todos os botões de fechamento ("X" e "Fechar")
const closeButtons = document.querySelectorAll('.close, .close-modal');

// Adiciona evento de clique para fechar o modal
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal'); // Seleciona o modal pai mais próximo
    if (modal) {
      modal.style.display = 'none'; // Oculta o modal
    }
  });
});

// Fecha o modal ao clicar fora do conteúdo
const modals = document.querySelectorAll('.modal');
modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'; // Oculta o modal
    }
  });
});








//carrocel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

let currentIndex = 0;
const slideWidth = carouselItems[0].offsetWidth; // Largura de cada item
const intervalTime = 3000; // Tempo entre slides (em milissegundos)

// Função para atualizar a posição do carrossel
function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Próximo slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // Volta ao início se atingir o último slide
    updateCarouselPosition();
}

// Slide anterior
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Volta ao último slide se atingir o início
    updateCarouselPosition();
}

// Evento para os botões
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

// Gira automaticamente
let autoSlide = setInterval(showNextSlide, intervalTime);

// Pausa o carrossel ao passar o mouse
carousel.addEventListener('mouseover', () => clearInterval(autoSlide));

// Reinicia o carrossel ao remover o mouse
carousel.addEventListener('mouseout', () => {
    autoSlide = setInterval(showNextSlide, intervalTime);
});





//alerta
document.addEventListener("DOMContentLoaded", () => {
    const alertContainer = document.getElementById("alert-container");
    const closeAlertButton = document.getElementById("close-alert");

    // Mostrar o alerta automaticamente após 1 segundo
    setTimeout(() => {
        alertContainer.classList.add("active");
    }, 1000);

    // Fechar o alerta ao clicar no botão
    closeAlertButton.addEventListener("click", () => {
        alertContainer.classList.remove("active");
    });
});












// Atualizar o relógio dinâmico
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock(); // Atualiza imediatamente ao carregar





