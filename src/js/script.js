
import {controller} from '../js/controller/controller';
 controller();


// const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums';
// const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId={{id}}';

// const ALBUM_ITEM_CLASS = 'album-item';

// const albumEl = document.querySelector('#albums');
// const fotoEl = document.querySelector('#fotos');
// const container = document.querySelector('.container');

// const albumTemplate = document.querySelector('#albumTemplate').innerHTML;
// const fotoTemplate = document.querySelector('#fotoTemplate').innerHTML;


// init();

// function init() {
//   fetchAlbum();
//   fetchFoto(1);
// }

// function fetchFoto(albumId) {
//     fetch(getFotosUrl(albumId))
//     .then((resp) => resp.json())   
//     .then(renderFotos);    
//   }

// function getFotosUrl(albumId) {
//   return PHOTOS_URL.replace('{{id}}', albumId);
//   }


// function renderFotos(data) {
//   fotoEl.innerHTML = data.map((foto) => getFotoHTML(foto))
//     .join('\n');
// }  
  
//   function getFotoHTML(foto) {
//     return fotoTemplate
//       .replace('{{url}}', foto.thumbnailUrl)
//       .replace('{{title}}', foto.title);
// }

// albumEl.addEventListener('click', onAlbumsClick);

// function onAlbumsClick(e) {
//     if (e.target.classList.contains(ALBUM_ITEM_CLASS)) {
//         fetchFoto(e.target.dataset.id);
//     }
//   }
  
// function fetchAlbum() {
//     return fetch(ALBUM_URL)
//         .then(resp => resp.json())
//         .then(data => {
//             renderAlbums(data);
//             return data;
//         });
// }

// function renderAlbums(data) {
//     albumEl.innerHTML = data.map(album => getAlbumHTML(album)).join('\n');
// }

// function getAlbumHTML(album) {
//     return albumTemplate
//         .replace('{{id}}', album.id)
//         .replace('{{title}}', album.title);
// }

  
