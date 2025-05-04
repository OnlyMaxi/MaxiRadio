export async function getWeatherData(location) {
    const apiKey = await getWeatherApiKey();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${apiKey}&units=metric`);
    return await response.json();
}

async function getWeatherApiKey() {
    const apiFile = await fetch("/gitignore/api.json");
    return (await apiFile.json()).openweather_key;
}