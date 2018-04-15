const tabletojson = require('tabletojson');

const pageUrl = 'https://en.wikipedia.org/wiki/Next_Irish_general_election';
const tableIndex = 5;

async function scrapeTable(url, index) {
  const table = await tabletojson.convertUrl(url, { useFirstRowForHeadings: true })
    .then(tables => {
      return tables[index];
    });

  return table;
}

scrapeTable(pageUrl, tableIndex).then(data => console.log(data));
