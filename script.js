// Filtrar animes com base na busca
const searchInput = document.getElementById('searchInput');
const animeCards = document.querySelectorAll('.card');

// Adiciona um evento de entrada ao campo de busca
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    // Filtra os cartões com base na entrada
    animeCards.forEach(card => {
        const title = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = ''; // Mostra o cartão
        } else {
            card.style.display = 'none'; // Esconde o cartão
        }
    });
});
function openTab(evt, tabName) {
    const tabs = document.getElementsByClassName('tab');
    const contents = document.getElementsByClassName('tab-content');

    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    for (let content of contents) {
        content.classList.remove('active');
    }

    evt.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

function changeEpisode(src) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = src;
    videoPlayer.play(); // Começa a reproduzir o vídeo automaticamente
}
function goToIndex() {
    window.location.href = 'index.html';
}

function openTab(evt, tabName) {
    const tabs = document.getElementsByClassName('tab');
    const contents = document.getElementsByClassName('tab-content');

    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    for (let content of contents) {
        content.classList.remove('active');
    }

    evt.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

function changeEpisode(src) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = src;
    videoPlayer.play();

    // Alterna automaticamente para a aba do player
    const playerTab = document.querySelector(".tab[onclick=\"openTab(event, 'tab1')\"]");
    playerTab.click();
}
