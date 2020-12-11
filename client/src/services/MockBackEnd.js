'use strict';

class MockBackEnd {
    
    someAppLibraryFunctionThatWillRunInAppsScript() {
        return this.later("Whoa hey c'mon now");
    }

    later(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value);
            }, 500);
        });
    }
};

export default MockBackEnd;