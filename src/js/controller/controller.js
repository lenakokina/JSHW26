
// import { data } from 'browserslist';

import { fotoArr, albumArr, fetchAlbum, fetchFoto } from '../model/collection';
import { renderFotos, renderAlbums, getFirstAlbumPhotos } from '../view/view';
import { data } from 'browserslist';


export function controller() {
   
    fetchAlbum();
    renderAlbums(albumArr); 
    fetchFoto(1);
    renderFotos(fotoArr);     
    getFirstAlbumPhotos(fotoArr[0]);        
}



