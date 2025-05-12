export async function getWeatherData(location) {
    const apiKey = await getWeatherApiKey();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${apiKey}&units=metric`);
    return await response.json();
}

async function getWeatherApiKey() {
    const apiFile = await fetch("/gitignore/api.json");
    return (await apiFile.json()).openweather_key;
}

export function initWeatherUpdates(weatherPending) {
    const now = new Date();
    const minutes = now.getMinutes();
    
    const minutesToNextHalfHour = minutes < 30 ? (30 - minutes) : (60 - minutes);
    let delay = (minutesToNextHalfHour * 60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    
    setTimeout(() => {
        setWeatherPending(weatherPending);
        setInterval(() => setWeatherPending(weatherPending), 30 * 60 * 1000);
    }, delay);
}

function setWeatherPending(weatherPending) {
    weatherPending = true;
    console.log("weatherPending set to true");
    const audio = document.querySelector("#portal-music");
    audio.play();
}