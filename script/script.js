console.log('welcome to spotify');
/*initialize the variables*/
let songIndex=0;
let audioElment=new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs=[
    {songName:"Let Me Love You", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"do you know me", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"}]
//audioElment.play()

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElment.paused || audioElment.currentTime <= 0) {
        audioElment.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElment.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
//Listen to Events
myProgressBar.addEventListener('timeuupdate', () => {
    console.log('timeupdate');
})