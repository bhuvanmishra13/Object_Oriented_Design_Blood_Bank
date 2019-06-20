"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var Util = /** @class */ (function () {
    function Util() {
        this.displayQuestionAndGetResponseFromTerminal = function (question) {
            var response = readlineSync.question(question);
            return response;
        };
        this.readlineSync = readlineSync;
    }
    return Util;
}());
exports["default"] = Util;
