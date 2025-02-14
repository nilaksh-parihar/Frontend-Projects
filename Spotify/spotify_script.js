console.log("Welcome to Spotify");

//Inintialize the variables
let songindex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let MastersongName = document.getElementById('MastersongName');
let songItems = Array.from(document.getElementsByClassName('SongItem'));

let songs = [
    {songname: "Nightmares - BoyWithuke",filepath:"song/1.mp3", cover:"cover/1.jpg"},
    {songname: "Syn Cole - I Can Feel",filepath:"song/2.mp3", cover:"cover/2.jpg"},
    {songname: "TOKYO MACHINE, NEFFEX - Desperate",filepath:"song/3.mp3", cover:"cover/3.jpg"},
    {songname: "Chime, Teminite - Duckstep",filepath:"song/4.mp3", cover:"cover/4.jpg"},
    {songname: "Division One, Halvorsen, JJD - Just A Minute More",filepath:"song/5.mp3", cover:"cover/5.jpg"},
    {songname: "Maestro Chives, Egzod, Neoni - Royalty",filepath:"song/6.mp3", cover:"cover/6.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].cover;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songname;
});


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
});

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songindex+1}.mp3`;
        MastersongName.innerText = songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex >= songs.length - 1){
        songindex = 0;
    }else{
        songindex += 1;
    }
    audioElement.src = `song/${songindex+1}.mp3`;
    MastersongName.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = songs.length - 1;
    }else{
        songindex -= 1;
    }
    audioElement.src = `song/${songindex+1}.mp3`; 
    MastersongName.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})