!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=a.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){t[e]=a},a.parcelRequired7c6=r);var o=r("bpxeT"),i=r("2TvXO"),s=r("dIxxU"),c=r("6JpON"),l=r("5IjG7"),u=document.querySelector("#search-form"),p=document.querySelector("input"),f=document.querySelector(".gallery"),d=document.querySelector(".load-more"),y=new(e(l))(".gallery a");function m(e,a){return g.apply(this,arguments)}function g(){return(g=e(o)(e(i).mark((function a(n,t){var r,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pixabay.com/api/",r={params:{key:"36025567-5ea91224bccb9b50632c1726a",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:40}},e.prev=2,e.next=5,s.default.get("https://pixabay.com/api/",r);case 5:h((o=e.sent).data.hits.length,o.data.total),b(o.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),a,null,[[2,10]])})))).apply(this,arguments)}function b(e){var a=e.map((function(e){var a=e.webformatURL,n=e.largeImageURL,t=e.tags,r=e.likes,o=e.views,i=e.comments,s=e.downloads;return'<a class="gallery__item" href="'.concat(n,'">\n              <div class="img-container">\n                  <img class="gallery__image" src="').concat(a,'" alt="').concat(t,'" loading="lazy"/>\n              </div>\n              <div class="info">\n                  <p class="info-item"><b>Likes</b> <br>').concat(r,'</p>\n                  <p class="info-item"><b>Views</b> <br>').concat(o,'</p>\n                  <p class="info-item"><b>Comments</b> <br>').concat(i,'</p>\n                  <p class="info-item"><b>Downloads</b> <br>').concat(s,"</p>\n              </div></a>")})).join("");f.insertAdjacentHTML("beforeend",a),y.refresh()}function h(a,n){0!==a?(1===page&&(d.style.display="flex",e(c).Notify.success("Hooray! We found ".concat(n," images."))),a<40&&(d.style.display="none",e(c).Notify.info("We're sorry, but you've reached the end of search results."))):e(c).Notify.failure("Sorry, there are no images matching your search query. Please try again.")}u.addEventListener("submit",(function(a){a.preventDefault(),page=1,f.innerHTML="";var n=p.value.trim();if(""===n)return d.style.display="none",e(c).Notify.failure("Sorry, there are no images matching your search query. Please try again.");m(n)})),d.addEventListener("click",(function(){var e=p.value.trim();page+=1,m(e,page)})),d.style.display="none"}();
//# sourceMappingURL=index.7bf6aeb4.js.map
