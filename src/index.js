import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createGalleryImg } from '../src/js/markup-img';
import { getUser } from "./js/api";


const searchForm = document.querySelector('#search-form');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a');

//let pege = 1;

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

function alert(length, totalHits) {
    if (length === 0) {
        Notiflix.Notify.failure(
'Sorry, there are no images matching your search query. Please try again.'
    );
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



export { gallery };
export { alert };
export { pege };