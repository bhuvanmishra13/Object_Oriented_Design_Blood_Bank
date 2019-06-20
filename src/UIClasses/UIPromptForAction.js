"use strict";
exports.__esModule = true;
var Util_1 = require("../Util/Util");
var UIPromptForAction = /** @class */ (function () {
    function UIPromptForAction() {
    }
    UIPromptForAction.prototype.displayQuestionsAndSaveTheRequiredInfo = function (questions) {
        var _this = this;
        questions.forEach(function (el) {
            _this.responseIndicatingWhetherUserIsBuyerOrDonor = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(el);
        });
    };
    UIPromptForAction.prototype.getTheRequiredInfoAsObject = function () {
        return this.responseIndicatingWhetherUserIsBuyerOrDonor;
    };
    return UIPromptForAction;
}());
exports["default"] = UIPromptForAction;
