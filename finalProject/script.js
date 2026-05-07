let clientId = "69d5cebd602545138a449865d1803dd9";
let redirectUri = "http://127.0.0.1:5500/finalProject/index.html";
async function login() {
    let codeVerifier = makeRandomString(64);
    let codeChallenge = await makeCodeChallenge(codeVerifier);
    localStorage.setItem("code_verifier", codeVerifier);
    let authUrl = "https://accounts.spotify.com/authorize";
    authUrl += "?client_id=" + clientId;
    authUrl += "&response_type=code";
    authUrl += "&redirect_uri=" + encodeURIComponent(redirectUri);
    authUrl += "&code_challenge_method=S256";
    authUrl += "&code_challenge=" + codeChallenge;
    window.location.href = authUrl;
}
function makeRandomString(length) {
    let text = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return text;
}
async function makeCodeChallenge(codeVerifier) {
    let data = new TextEncoder().encode(codeVerifier);
    let digest = await window.crypto.subtle.digest("SHA-256", data);
    let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(digest)));
    return base64String
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}
function searchSong() {
    let userSearch = document.getElementById("searchInput").value;
    document.getElementById("message").innerHTML = "You searched for: " + userSearch;
}