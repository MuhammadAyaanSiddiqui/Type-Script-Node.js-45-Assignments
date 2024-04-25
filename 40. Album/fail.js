function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        track: tracks,
    };
    if (tracks) {
        album: tracks = tracks;
    }
    return album;
}
;
// creat three albums,one with optional track count
var album1 = make_album("Lata manghesker", "Lag Ja Gale", 3);
var album2 = make_album("Kumar sanu", "Shikwa nahe Kese se", 5);
var album3 = make_album("Kishore Kumar", "Pal Pal dil k pass", 8);
console.log(album1);
console.log(album2);
console.log(album3);
