function make_album(artist:string, title:string, tracks?: number ): object{
let album: object = {
    artist:artist,
    title:title,
    track:tracks,
};
if (tracks){
    album:tracks = tracks;
}
return album;
};

// creat three albums,one with optional track count
let album1 = make_album("Open letter","Lag Ja Gale",3);
let album2 = make_album("Death wish","Late night",5);
let album3 = make_album("Kishore Kumar","Melancholy",8);

console.log(album1);
console.log(album2);
console.log(album3)