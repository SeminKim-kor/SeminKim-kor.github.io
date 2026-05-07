function login() {
    document.getElementById("message").innerHTML = "Login button clicked.";
}
function searchSong() {
    let userSearch = document.getElementById("searchInput").value;

    document.getElementById("message").innerHTML = "You searched for: " + userSearch;
}