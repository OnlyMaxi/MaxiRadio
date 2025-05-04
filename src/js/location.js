let location;

export function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = [position.coords.latitude, position.coords.longitude];
                    resolve(location);
                },
                (err) => {
                    alert("Sorry, no position available.");
                    reject(err);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
            reject(new Error("Geolocation not supported"));
        }
    });
}