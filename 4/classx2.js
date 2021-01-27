class Song{
    constructor(title,artist){
        this.title = title;
        this.author = artist;
    }

    play(){
        console.log("Song playing!");
    }
}

const mySong = new Song("Bohemian Rhapsody","Queen");
console.log(mySong.title);

const loveSong = new Song("Yesterday","Beatle");
console.log(loveSong.title);
