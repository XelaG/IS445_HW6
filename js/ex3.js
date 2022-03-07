function makePBold() {
    var paragraphs = document.getElementsByTagName('p');

    for (var idx = 0; idx < paragraphs.length; idx++) {
        paragraphs[idx].style += ";background-color: #FFFF00; font-weight: bold;";
    } 
}