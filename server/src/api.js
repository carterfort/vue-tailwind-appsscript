function doGet() {
    return HtmlService
        .createTemplateFromFile('index')
        .evaluate();

}

function someAppLibraryFunctionThatWillRunInAppsScript() {
    return AppLib.someAppLibraryFunctionThatWillRunInAppsScript();
}