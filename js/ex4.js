function addLink() {
    var list = document.querySelector('ul:not(.iscourses)');
    var newElement = document.createElement('li');
    var link = document.createElement('a');
    link.href= "https://www.csulb.edu/college-of-business"
    link.appendChild(document.createTextNode("College of Business"))
    newElement.appendChild(link);
    list.childNodes[1].appendChild(newElement);
}
