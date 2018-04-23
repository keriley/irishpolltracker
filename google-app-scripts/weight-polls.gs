function weighSep17 () {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  for (var i = 1; i >= lastEntryIndex; i++) {
    var date = pollsSheet.getRange(i, 1, lastEntryIndex-1).getValue();
    var month = date.getMonth();
    var year = date.getYear();
  };
}
