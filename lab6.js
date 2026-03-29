function loadData() {
    fetch("https://brianobruno.github.io/cats.json")
        .then(response => response.json())
        .then(data => {
            data.facts.sort(function(a, b) {
                return a.factId - b.factId;
            });
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";
            for (let i = 0; i < data.facts.length; i++) {
                tableBody.innerHTML +=
                    "<tr>" +
                    "<td>" + data.facts[i].factId + "</td>" +
                    "<td>" + data.facts[i].fact + "</td>" +
                    "</tr>";
            }
            document.getElementById("catImage").src = data.catPhoto;
        });
}