import { ALBUM_URL } from '../config';
import { getFotosUrl } from '../view/view';
import { renderAlbums } from '../view/view';
import { renderFotos } from '../view/view';

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



