function generateTable() {
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);

    if (start < 2 || end < 2 || start > 10 || end > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    var output = "<table border='1' cellspacing='5' cellpadding='10'>";
    for (var i = 1; i <= start; i++) {
        output += "<tr>";
        for (var j = 1; j <= end; j++) {
            output += "<td>" + (i * j) + "</td>";
        }
        output += "</tr>";
    }
    output += "</table>";

    document.getElementById("tableOutput").innerHTML = output;
}