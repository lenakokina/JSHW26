
// import { data } from 'browserslist';
import { data } from 'browserslist';
import { fotoArr, albumArr, fetchAlbum, fetchFoto } from '../model/collection';
import { renderFotos, renderAlbums, getFirstAlbumPhotos } from '../view/view';



export function controller() {
    
    fetchAlbum();
    renderAlbums(albumArr);  
    
    fetchFoto(1);
    renderFotos(fotoArr);

    getFirstAlbumPhotos(fotoArr[0]);
           
}


