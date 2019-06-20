const readlineSync = require('readline-sync');

class Util {
    readlineSync;


    constructor() {
        this.readlineSync = readlineSync;
    }

    displayQuestionAndGetResponseFromTerminal = (question: string) => {
        let response = readlineSync.question(question);
        return response;
    }
}

export default Util;