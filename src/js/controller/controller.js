
import { fotoArr, albumArr, fetchAlbum, fetchFoto } from '../model/collection';
import { renderFotos, renderAlbums, getFirstAlbumPhotos } from '../view/view';
console.log(fotoArr)


export function controller() { 
    fetchAlbum();
    fetchFoto(1);
    getFirstAlbumPhotos(fotoArr[0]);  
    renderAlbums(albumArr);
    renderFotos(fotoArr); 
          
}



