//combine the six party adjustment functions so they can be run with one click
function adjustPolls () {
  adjustFG();
  adjustFF();
  adjustLab();
  adjustSF();
  adjustGP();
  adjustOI();
  addWeight();
}

//FUNCTION TO ADJUST SUPPORT FOR FINE GAEL BASED ON POLLSTER
function adjustFG () {

  //define pseudo GAS global variables
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  //loop through all of the polls entered, and then stop
  for(var i = 1; i <= lastEntryIndex; i++) {
  
    //define local variables for the pollster and Fine Gael support
    var pollster = pollsSheet.getRange(i, 2, lastEntryIndex-1).getValue();
    var FGValue = pollsSheet.getRange(i, 4).getValue();
    
    //adjust Fine Gael support based on the pollster, and record value in new column
    if (pollster == "Behaviour and Attitudes") {
      pollsSheet.getRange(i, 10).setValue(FGValue-(FGValue*0.14));
    } else if (pollster == "Ipsos MRBI") {
      pollsSheet.getRange(i, 10).setValue(FGValue-(FGValue*0.02))
    } else if (pollster == "Millward Brown") {
      pollsSheet.getRange(i, 10).setValue(FGValue+(FGValue*0.01))
    } else if (pollster == "Red C") {
      pollsSheet.getRange(i, 10).setValue(FGValue-(FGValue*0.07))
    };
  }
}

//FUNCTION TO ADJUST SUPPORT FOR FIANNA FAIL BASED ON POLLSTER
function adjustFF () {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  for(var i = 1; i <= lastEntryIndex; i++) {
    var pollster = pollsSheet.getRange(i, 2, lastEntryIndex-1).getValue();
    var FFValue = pollsSheet.getRange(i, 5).getValue();
    if (pollster == "Behaviour and Attitudes") {
      pollsSheet.getRange(i, 11).setValue(FFValue+(FFValue*0.18));
    } else if (pollster == "Ipsos MRBI") {
      pollsSheet.getRange(i, 11).setValue(FFValue+(FFValue*0.11))
    } else if (pollster == "Millward Brown") {
      pollsSheet.getRange(i, 11).setValue(FFValue+(FFValue*0.15))
    } else if (pollster == "Red C") {
      pollsSheet.getRange(i, 11).setValue(FFValue+(FFValue*0.25))
    };
  }
}

//FUNCTION TO ADJUST SUPPORT FOR LABOUR BASED ON POLLSTER
function adjustLab () {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  for(var i = 1; i <= lastEntryIndex; i++) {
    var pollster = pollsSheet.getRange(i, 2, lastEntryIndex-1).getValue();
    var LabValue = pollsSheet.getRange(i, 6).getValue();
    if (pollster == "Behaviour and Attitudes") {
      pollsSheet.getRange(i, 12).setValue(LabValue+(LabValue*0.1));
    } else if (pollster == "Ipsos MRBI") {
      pollsSheet.getRange(i, 12).setValue(LabValue-(LabValue*0.07))
    } else if (pollster == "Millward Brown") {
      pollsSheet.getRange(i, 12).setValue(LabValue-(LabValue*0.12))
    } else if (pollster == "Red C") {
      pollsSheet.getRange(i, 12).setValue(LabValue-(LabValue*0.08))
    };
  }
}

//FUNCTION TO ADJUST SUPPORT FOR SINN FEIN BASED ON POLLSTER
function adjustSF () {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  for(var i = 1; i <= lastEntryIndex; i++) {
    var pollster = pollsSheet.getRange(i, 2, lastEntryIndex-1).getValue();
    var SFValue = pollsSheet.getRange(i, 7).getValue();
    if (pollster == "Behaviour and Attitudes") {
      pollsSheet.getRange(i, 13).setValue(SFValue-(SFValue*0.14));
    } else if (pollster == "Ipsos MRBI") {
      pollsSheet.getRange(i, 13).setValue(SFValue-(SFValue*0.17))
    } else if (pollster == "Millward Brown") {
      pollsSheet.getRange(i, 13).setValue(SFValue-(SFValue*0.2))
    } else if (pollster == "Red C") {
      pollsSheet.getRange(i, 13).setValue(SFValue-(SFValue*0.2))
    };
  }
}

//FUNCTION TO ADJUST SUPPORT GREEN PARTY BASED ON POLLSTER
function adjustGP () {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  for(var i = 1; i <= lastEntryIndex; i++) {
    var pollster = pollsSheet.getRange(i, 2, lastEntryIndex-1).getValue();
    var GPValue = pollsSheet.getRange(i, 8).getValue();
    if (pollster == "Behaviour and Attitudes") {
      pollsSheet.getRange(i, 14).setValue(GPValue+(GPValue*0.16));
    } else if (pollster == "Ipsos MRBI") {
      pollsSheet.getRange(i, 14).setValue(GPValue+(GPValue*0.29))
    } else if (pollster == "Millward Brown") {
      pollsSheet.getRange(i, 14).setValue(GPValue+(GPValue*0.8))
    } else if (pollster == "Red C") {
      pollsSheet.getRange(i, 14).setValue(GPValue-(GPValue*0.17))
    };
  }
}

//FUNCTION TO ADJUST SUPPORT FOR OTHERS/INDEPENDENTS BASED ON POLLSTER
function adjustOI () {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  for(var i = 1; i <= lastEntryIndex; i++) {
    var pollster = pollsSheet.getRange(i, 2, lastEntryIndex-1).getValue();
    var OIValue = pollsSheet.getRange(i, 9).getValue();
    if (pollster == "Behaviour and Attitudes") {
      pollsSheet.getRange(i, 15).setValue(OIValue+(OIValue*0.08));
    } else if (pollster == "Ipsos MRBI") {
      pollsSheet.getRange(i, 15).setValue(OIValue+(OIValue*0.07))
    } else if (pollster == "Millward Brown") {
      pollsSheet.getRange(i, 15).setValue(OIValue+(OIValue*0.08))
    } else if (pollster == "Red C") {
      pollsSheet.getRange(i, 15).setValue(OIValue+(OIValue*0.13))
    };
  }
}

//FUNCTION TO ADD PREVIOUSLY CALCULATED WEIGHTS FOR EACH POLLSTER
function addWeight () {
  
  //define pseudo GAS global variables
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pollsSheet = ss.getSheetByName("polls");
  var supportSheet = ss.getSheetByName("party_support_calculated");
  var lastEntryIndex = pollsSheet.getLastRow();
  
  //add weighting based on pollster, and record value in new column
  for(var i = 1; i <= lastEntryIndex; i++) {
    var pollster = pollsSheet.getRange(i, 2, lastEntryIndex-1).getValue();
    if (pollster == "Behaviour and Attitudes") {
      pollsSheet.getRange(i, 18).setValue(4.8);
    } else if (pollster == "Ipsos MRBI") {
      pollsSheet.getRange(i, 18).setValue(10.93)
    } else if (pollster == "Millward Brown") {
      pollsSheet.getRange(i, 18).setValue(6.53)
    } else if (pollster == "Red C") {
      pollsSheet.getRange(i, 18).setValue(2.74)
    };
  }
}
