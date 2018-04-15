const tabletojson = require('tabletojson');

const pageUrl = 'https://en.wikipedia.org/wiki/Next_Irish_general_election';
const tableIndex = 5;
const parties = [
  'FG', 'FF', 'SF', 'Lab', 'GP'
];
const partiesToCombine = [
  'S-PBP', 'SD', 'RI', 'IA', 'O/I'
];

async function scrapeTable(url, index) {
  const table = await tabletojson.convertUrl(url, { useFirstRowForHeadings: true })
    .then(tables => {
      return tables[index];
    });

  return table;
}

function cleanTable(table) {
  table = table.slice(2);

  const newTable = [];
  table.forEach(poll => {
    const pollDate = poll['Last date\nof polling'].slice(8, 18);
    let pollingFirm = poll['Polling firm/Commissioner/Link'];
    pollingFirm = pollingFirm.replace(/\[.*?\]/g, '').trim();

    const results = [];
    parties.forEach(party => {
      results.push({
        party: party,
        value: +poll[party]
      });
    });

    let other = 0;
    partiesToCombine.forEach(party => {
      const val = +poll[party];
      if (val) {
        other += val;
      }
    });

    results.push({
      party: 'Other',
      value: other
    })

    newTable.push({
      date: pollDate,
      pollingFirm: pollingFirm,
      results: results
    })
  });
  return newTable;
}

scrapeTable(pageUrl, tableIndex).then(table => console.log(cleanTable(table)));
