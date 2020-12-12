//Change this to whatever your spreadsheet ID is
const messageSheetId = "1g0k3yVuUElB4GYOi-t0KV_6f_X0rpGYt9Bzt2WOmqAU"

function saveMessage(msgObj) {
    // Save the message to the spreadsheet
    let sheet = SpreadsheetApp.openById(messageSheetId).getActiveSheet();
    sheet.appendRow([msgObj.title, msgObj.message]);
}

function readMessages() {
    let sheet = SpreadsheetApp.openById(messageSheetId).getActiveSheet();
    let messagesCount = sheet.getMaxRows() - 1;

    return sheet.getRange(2, 1, messagesCount, 2).getValues().map((row) => {
        return { title: row[0], message: row[1] }
    });

}

export {
    saveMessage,
    readMessages
}; 