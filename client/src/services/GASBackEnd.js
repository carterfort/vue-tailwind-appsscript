
'use strict';

class GASBackEnd {
    someAppLibraryFunctionThatWillRunInAppsScript() {
        return new Promise(function (resolve, reject) {
            google.script.run.withSuccessHandler(function (res) {
                resolve(res);
            })
                .withFailureHandler(function () {
                    reject();
                }).someAppLibraryFunctionThatWillRunInAppsScript();
        });
    }


}

export default GASBackEnd;