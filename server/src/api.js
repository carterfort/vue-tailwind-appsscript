function doGet() {
    return HtmlService
        .createTemplateFromFile('index')
        .evaluate();

}

function saveMessage(msgObj) {
    return AppLib.saveMessage(msgObj);
}

function readMessages() {
    return AppLib.readMessages();
}