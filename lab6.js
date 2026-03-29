function loadData() {
    fetch("https://brianobruno.github.io/cats.json")
        .then(response => response.json())
        .then(data => {
            let facts = data.facts || [];
            facts.sort(function(a, b) {
                return a.factId - b.factId;
            });
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";
            for (let i = 0; i < facts.length; i++) {
                tableBody.innerHTML +=
                    "<tr>" +
                    "<td>" + facts[i].factId + "</td>" +
                    "<td>" + facts[i].fact + "</td>" +
                    "</tr>";
            }
            if (data.catPhoto) {
                document.getElementById("catImage").src = data.catPhoto;
            }
        })
        .catch(error => {
            console.log("Error:", error);
        });
}