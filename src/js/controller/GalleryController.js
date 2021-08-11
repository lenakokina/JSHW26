init();

function init() {
    
    fetchAlbum();
    renderAlbums(albumArr);    
    
    fetchFoto(1);
    renderFotos(fotoArr);
    
    getFirstAlbumPhotos(fotoArr[0]);
           
}


