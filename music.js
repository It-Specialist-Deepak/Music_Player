
const songs = [
    {
        name: "song1",
        title: "Gangsta Paradise-",
        artist : "Coolio"
    },
    {
        name: "song2",
        title: "Untill I Found you- ",
        artist: "Deepak"
    },
    {
        name: "song3",
        title: " Past Lives-",
        artist: "Shubham"
    },
]
let isplaying;
songIndex = -1;
const music = document.querySelector("audio");
const play = document.getElementById('play');
const img = document.getElementById("circle-img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("backward");
const next = document.getElementById("forward");
const MyprogressBar = document.getElementById("MyprogressBar");
const gif = document.querySelector(".musicbeat img");

//to PLay Music 
const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
    gif.style.opacity = 1;
};
const pausemusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
    gif.style.opacity = 0;
};

play.addEventListener("click", () => {
    if (isplaying) {
        pausemusic();
    }
    else {
        playmusic();
    }
})
//to load music data
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    nextSong()
    pausemusic()
    img.classList.remove("anime");
    gif.style.opacity = 0;
}
const prevSong = () => {
    songIndex = (songIndex + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    prevSong()
    pausemusic()
    img.classList.remove("anime");
    gif.style.opacity = 0;
}
const loadSongs = (songs) => {
  title.textContent = songs.title;
    artist.textContent =songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "imagesmusicapp/" + songs.name + ".jpg";
}

//progress bar update
music.addEventListener("timeupdate", (event) => {
    progress = parseInt((music.currentTime / music.duration) * 100);
    MyprogressBar.value = progress;

})
MyprogressBar.addEventListener("change", () => {
    music.currentTime = MyprogressBar.value * music.duration/100;
})



next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);



