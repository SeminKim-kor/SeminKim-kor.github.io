let clientId = "69d5cebd602545138a449865d1803dd9";
let redirectUri = "http://127.0.0.1:5500/finalProject/index.html";
checkForCode();
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
async function checkForCode() {
    let params = new URLSearchParams(window.location.search);
    let code = params.get("code");

    if (code != null) {
        await getAccessToken(code);
    }
}
async function getAccessToken(code) {
    let codeVerifier = localStorage.getItem("code_verifier");
    let bodyData = "client_id=" + clientId;
    bodyData += "&grant_type=authorization_code";
    bodyData += "&code=" + code;
    bodyData += "&redirect_uri=" + encodeURIComponent(redirectUri);
    bodyData += "&code_verifier=" + codeVerifier;
    let response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyData
    });
    let data = await response.json();
    if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);

        document.getElementById("message").innerHTML = "Login successful.";

        window.history.replaceState({}, document.title, "index.html");
    } else {
        document.getElementById("message").innerHTML = "Login failed.";
    }
}
function searchSong() {
    let userSearch = document.getElementById("searchInput").value;
    document.getElementById("message").innerHTML = "You searched for: " + userSearch;
}