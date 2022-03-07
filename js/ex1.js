//Complete the following functions
//Displays all nodes
const bodyNodes = () => {
    var nodes = document.body.childNodes;
    for (var idx = 0; idx < nodes.length; idx++) {
            console.log(nodes[idx]);
    }
}
