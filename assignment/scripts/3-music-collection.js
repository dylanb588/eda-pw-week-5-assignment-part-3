console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  collection.push(newAlbum);

  return newAlbum;
}

let newAlbum = addToCollection(myCollection, "Norman F*****g Rockwell!", "Lana Del Rey", 2019);
console.log(newAlbum);
newAlbum = addToCollection(myCollection, "Hot Pink", "Doja Cat", 2019);
console.log(newAlbum);
newAlbum = addToCollection(myCollection, "Chemtrails Over the Country Club", "Lana Del Rey", 2021);
console.log(newAlbum);
newAlbum = addToCollection(myCollection, "Endless Summer Vacation", "Miley Cyrus", 2023);
console.log(newAlbum);
newAlbum = addToCollection(myCollection, "Dirt Femme", "Tove Lo", 2022);
console.log(newAlbum);
newAlbum = addToCollection(myCollection, "PORTALS", "Melanie Martinez", 2023);
console.log(newAlbum);
console.log(myCollection);

function showCollection(collection) {
  for (const album of collection) {
    console.log(`${album.title}, by, ${album.artist}, ${album.yearPublished}`);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let match = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      match.push(collection[i]);
    }
  }
  return match;
}

let artistToFind = 'Lana Del Rey';
const result = findByArtist(myCollection, artistToFind);

console.log(result);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
