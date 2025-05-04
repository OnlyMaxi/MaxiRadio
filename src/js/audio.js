export function init() {
    const audio = document.querySelector("#portal-music");
    
    document.querySelector("#play-button").addEventListener("click", () => {
        audio.play();
    });
    document.querySelector("#pause-button").addEventListener("click", () => {
        audio.pause();
    });
    document.querySelector("#volume-slider").addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });
}