import { ALBUM_URL } from './config.js';
import { getFotosUrl } from './view/view.js';
// import { renderAlbums } from './view/view.js';
// import { renderFotos } from './view/view.js';

export let fotoArr = [];
export let albumArr = [];


export function fetchAlbum() {
    return fetch(ALBUM_URL)
        .then(resp => resp.json())
        .then((data) => albumArr = data)
        .then(renderAlbums);
}

export function fetchFoto(albumId) {
    fetch(getFotosUrl(albumId))
        .then((resp) => resp.json())
        .then((foto) => fotoArr = foto)
        .then(renderFotos);    
  }



