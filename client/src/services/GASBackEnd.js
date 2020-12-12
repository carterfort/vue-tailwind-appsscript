class GASBackEnd {
    saveMessage(msgObj) {
        return new Promise(function (resolve, reject) {
            google.script.run.withSuccessHandler(function (res) {
                resolve(res);
            })
                .withFailureHandler(function () {
                    reject();
                }).saveMessage(msgObj);
        });
    }

    readMessages(){
        return new Promise(function (resolve, reject) {
            google.script.run.withSuccessHandler(function (res) {
                resolve(res);
            })
                .withFailureHandler(function () {
                    reject();
                }).readMessages();
        }); 
    }


}

export default GASBackEnd;