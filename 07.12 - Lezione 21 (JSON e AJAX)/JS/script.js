fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/302127", {
    method: "GET",
    headers: {
        authorization: "no-cors"
    }
})
.then((response) => response.json())
.then((obj) => {
    console.log(obj);
})


async function getArtist(artistId) {
    const response = await fetch(
      https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}
    );
    const artist = await response.json();
    // console.log(artist);
    return artist;
  }
  async function getArtistTracklist(artistId) {
    let tracks = [];
    const artist = await getArtist(artistId);
    const response = await fetch(artist.tracklist);
    let currentTracklist = await response.json();
    tracks.push(...currentTracklist.data);
    console.log(tracks);
    return tracks;
  }
  async function getArtistAlbums(artistId) {
    const tracklist = await getArtistTracklist(artistId);
    let albums = [];
    // console.log(tracklist);
    tracklist.forEach((track) => {
      const albumId = track.album.id;
      if (!albums.some((album) => album.id === albumId)) {
        albums.push(track.album);
      }
    });
    // console.log(albums);
    return albums;