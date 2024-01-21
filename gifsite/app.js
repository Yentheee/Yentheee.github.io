const apiKey = 'pLUMsr5bo1crH9Z6ycbrdjyWe2sSc3JA';
const endpoint = 'https://api.giphy.com/v1/stickers/search';
const searchTerm = 'cats-cartoon-love-stickers';
let offset = 0;
const limit = 10;

const gifContainer = document.getElementById('gif-container');
const loadMoreBtn = document.getElementById('load-more-btn');

async function fetchGifs() {
    try {
        const response = await fetch(`${endpoint}?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset}`);
        const data = await response.json();

        displayGifs(data.data);
        offset += limit;
    } catch (error) {
        console.error('Error fetching gifs:', error);
    }
}

function displayGifs(gifs) {
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.classList.add('gif');

        gifContainer.appendChild(img);
    });
}

function loadMoreGifs() {
    fetchGifs();
}

loadMoreBtn.addEventListener('click', loadMoreGifs);
fetchGifs();