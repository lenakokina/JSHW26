import '../../css/styles.css';
import '../../css/normalize.css';
import '../../css/dark.css';
import { PHOTOS_URL } from '../config';
import { albumArr } from '../model/collection';
 const ALBUM_ITEM_CLASS = 'album-item';

 const albumEl = document.querySelector('#albums');
 const fotoEl = document.querySelector('#fotos');

 const albumTemplate = document.querySelector('#albumTemplate').innerHTML;
 const fotoTemplate = document.querySelector('#fotoTemplate').innerHTML;

albumEl.addEventListener('click', onAlbumsClick);

 function onAlbumsClick(e) {
    if (e.target.classList.contains(ALBUM_ITEM_CLASS)) {
        fetchFoto(e.target.dataset.id);
    }
}   

export function renderFotos(data) {
  fotoEl.innerHTML = data.map((foto) => getFotoHTML(foto))
    .join('\n');
}  
  
 function getFotoHTML(foto) {
    return fotoTemplate
      .replace('{{url}}', foto.thumbnailUrl)
      .replace('{{title}}', foto.title);
}
  
export function getFotosUrl(albumId) {
  return PHOTOS_URL.replace('{{id}}', albumId);
}

export function renderAlbums(data) {
    albumEl.innerHTML = data.map(album => getAlbumHTML(album)).join('\n');
}

 function getAlbumHTML(album) {
    return albumTemplate
        .replace('{{id}}', album.id)
        .replace('{{title}}', album.title);
}

export function getFirstAlbumPhotos(data) {
    if (albumArr.length) {
      fetchFoto(data[0].id);
    }
}

