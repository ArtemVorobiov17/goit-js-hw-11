/*import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { gallery } from "../index";

const lightbox = new SimpleLightbox('.gallery a');*/

/*function createGalleryImg(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<a class="gallery__item" href="${largeImageURL}">
              <div class="img-container">
                  <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
              </div>
              <div class="info">
                  <p class="info-item"><b>Likes</b> <br>${likes}</p>
                  <p class="info-item"><b>Views</b> <br>${views}</p>
                  <p class="info-item"><b>Comments</b> <br>${comments}</p>
                  <p class="info-item"><b>Downloads</b> <br>${downloads}</p>
              </div></a>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}*/
/*function createGalleryImg(array) {
    const markup = array.hits
        .map(item =>
            `<a class="photo-link" href="${item.largeImageURL}">
            <div class="photo-card">
            <div class="photo">
            <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy"/>
            </div>
              <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            ${item.likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            ${item.views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            ${item.comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            ${item.downloads}
                        </p>
                    </div>
            </div>
        </a>`
        
    ).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}*/




//export { createGalleryImg };