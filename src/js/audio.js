export function init(songs) {
    const audio = document.querySelector("#audio");
    
    document.querySelector("#play-button").addEventListener("click", () => {
        audio.play();
    });
    document.querySelector("#pause-button").addEventListener("click", () => {
        audio.pause();
    });
    document.querySelector("#volume-slider").addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });
    
    audio.addEventListener("ended", () => {
        console.log("Audio is done");
        determineNextAudio(songs, 0);
    });
}

export function determineNextAudio(songs, weatherPending) {
    console.log("next audio is being determined")
    const audio = document.querySelector("#audio");
    const currentRandom = Math.random();
    if (currentRandom < 0.5) {
        audio.src = `/src/content/audio/songs/01/Still%20Alive.wav`
    } else {
        audio.src = `/src/content/audio/songs/02/More%20Than%20A%20Feeling.wav`
    }
    audio.play();
}