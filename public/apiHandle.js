const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
const script = document.createElement("script");
script.src = scriptUrl
document.body.appendChild(script);