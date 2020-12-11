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


}

export default GASBackEnd;