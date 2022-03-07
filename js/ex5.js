function fillTable() {
    var toFill = document.getElementById('output')
    var table = document.createElement('table')
    for (var idx = 0; idx < 12; idx++) {
        var tr = document.createElement('tr')
        var element = document.createElement('td')
        element.appendChild(document.createTextNode(`${idx + 1}`))
        if ((idx + 1) % 4 === 0) {
            element.className += "divisible-by-four"
        }
        tr.appendChild(element)
        table.appendChild(tr)
    }
    toFill.appendChild(table)
}