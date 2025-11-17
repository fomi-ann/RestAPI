
function getData() {
    let xmlhttp = new XMLHttpRequest();
    let XMLContent;
    xmlhttp.open("GET", "modernconsole.xml", false);
    xmlhttp.send();
    XMLContent = xmlhttp.responseXML;
    
    let tableRows = "<tr><th>Console</th><th>Maker</th><th>Price</th><th>Year released</th><th>Units sold</th></tr>";
    let consoleElements = XMLContent.getElementsByTagName("console");
    
    for (let i = 0; i < consoleElements.length; i++){
        tableRows += "<tr><td>" + 
            consoleElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td>" + 
            consoleElements[i].getElementsByTagName("maker")[0].childNodes[0].nodeValue +
            "</td><td>" + 
            consoleElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</td><td>" +
            consoleElements[i].getElementsByTagName("releaseyear")[0].childNodes[0].nodeValue +
            "</td><td>" +
            consoleElements[i].getElementsByTagName("unitssold")[0].childNodes[0].nodeValue +
            "</td></tr>";
            
        document.getElementById("xmlTable").innerHTML = tableRows;
    }
}

document.getElementById("app").innerHTML = `
<table id="xmlTable"></table>
`;

getData();
