import axios from 'axios'
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.querySelector('#search-form');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a');

let page = 1;
const per_page = 40;

searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);
loadMoreBtn.style.display = 'none';


function onSearchForm(evt) {
  evt.preventDefault();
    
  page = 1;
  gallery.innerHTML = '';

  const query = input.value.trim();

  if (query !== '') {
    getUser(query);
  } else {
    loadMoreBtn.style.display = 'none';

    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } 
}


function onLoadMoreBtn() {
  const query = input.value.trim();
  page += 1;
  getUser(query, page);
}


async function getUser(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '36025567-5ea91224bccb9b50632c1726a',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: per_page,
    },
  };
  try {
    const response = await axios.get(BASE_URL, options);

    alert(
      response.data.hits.length,
      response.data.total
    );

    createGalleryImg(
      response.data
    );

  } catch (error) {
    console.log(error);
  }
}


function createGalleryImg(array) {
  const markup = array.hits.map(item =>
    `<a class="photo-link" href="${item.largeImageURL}">
      <div class="photo-card">
        <div class="photo">
          <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy"/>
        </div>
        <div class="info">
          <p class="info-item"><b>Likes</b> <br/>${item.likes}</p>
          <p class="info-item"><b>Views</b> <br/>${item.views}</p>
          <p class="info-item"><b>Comments</b> <br/>${item.comments}</p>
          <p class="info-item"><b>Downloads</b> <br/>${item.downloads}</p>
        </div>
      </div>
    </a>`
        
    ).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}


function alert(length, totalHits) {
  if (length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.');
      
    return;
  }

  if (page === 1) {
    loadMoreBtn.style.display = 'flex';
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
  }
  
  if (length < 40) {
    loadMoreBtn.style.display = 'none';
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  
  }
}