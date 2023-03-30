const { google } = require("googleapis");

function attendence(firstName, lastName, sid, rollNum, branch, phoneNum) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "Attendance File",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "Spreadsheet ID";


  // Get metadata about spreadsheet
  const metaData = googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
  });

  // Write row(s) to spreadsheet
  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[firstName, lastName, sid, rollNum, branch, phoneNum]],
    },
  });
}
  // attendence("donkey","loo","222","3332","comp","48488");
module.exports = {attendence}
