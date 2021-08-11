let fotoArr = [];
let albumArr = [];


function fetchAlbum() {
    return fetch(ALBUM_URL)
    .then(resp => resp.json())
    .then((data) => albumArr = data)
    .then(renderAlbums)                   
}

function fetchFoto(albumId) {
    fetch(getFotosUrl(albumId))
        .then((resp) => resp.json())
        .then((foto) => fotoArr = foto)
        .then(renderFotos);    
  }



