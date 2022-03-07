const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

function displayWords() {
    var content = document.getElementById('content');
    var dl = document.createElement('dl');
    for (var word of words) {
        var dt = document.createElement('dt');
        var strong = document.createElement('strong')
        strong.appendChild(document.createTextNode(word.term));
        dt.appendChild(strong)
        var dd = document.createElement('dd');
        dd.appendChild(document.createTextNode(word.definition))
        dl.appendChild(dt)
        dl.appendChild(dd)
    }
    content.appendChild(dl)
}