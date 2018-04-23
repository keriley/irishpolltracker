//calls google visualisation library table
google.load('visualization', '1', {
    packages: ['table']
});

//defines empty variable for the table
var visualization;

//queries public spreadsheet to extract data and label columns, triggers handleQueryResponse function
function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1ySIfax8AqawiXRl6pFkVx0-NXOiDgO_-NzdBbLVFtBE&output=html&gid=0&usp=sharing');
    query.setQuery('SELECT A, B, D, E, F, G, H, I label A "DATE", B "POLLSTER", D "Fine Gael", E "Fianna F&aacute;il", F "Labour", G "Sinn F&eacute;in", H "Green Party", I "Other/Ind."');
    query.send(handleQueryResponse);
}

//takes data extracted from public spreadsheet, draws table and binds it to html element
function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('data-table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}

//ready, set, go!
google.setOnLoadCallback(drawVisualization);
