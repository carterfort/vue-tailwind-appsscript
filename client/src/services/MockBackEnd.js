class MockBackEnd {

    saveMessage() {
       return this.later('message sent');
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