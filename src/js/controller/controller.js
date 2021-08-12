
import { fotoArr, albumArr, fetchAlbum, fetchFoto } from './model/collection.js';
import { renderFotos, renderAlbums, getFirstAlbumPhotos } from './view/view.js';



export function controller() {
    
    fetchAlbum();
    renderAlbums(albumArr);  
    
    fetchFoto(1);
    renderFotos(fotoArr);

    getFirstAlbumPhotos(fotoArr[0]);
           
}


