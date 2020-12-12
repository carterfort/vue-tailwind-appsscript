class MockBackEnd {

    readMessages() {

        let messageArray = [
            ["Loaded Up!", "Pulled in from server"]
        ].map( (row) => {
            return {title : row[0], message : row[1]}
        })

        return this.later(messageArray);
    }

    saveMessage() {
       return this.later('message sent');
    }

    later(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value);
            }, 1500);
        });
    }
};

export default MockBackEnd;