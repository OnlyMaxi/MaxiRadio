export async function getSongs() {
    return await (await fetch("/src/json/songs.json")).json();
}