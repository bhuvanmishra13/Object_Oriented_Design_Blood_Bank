"use strict";
exports.__esModule = true;
var Util_1 = require("../Util/Util");
var Buyer_1 = require("../CoreClasses/Buyer");
var BloodGroup_1 = require("../CoreClasses/BloodGroup");
var UIForBuyer = /** @class */ (function () {
    function UIForBuyer() {
    }
    UIForBuyer.prototype.displayQuestionsAndSaveTheRequiredInfo = function (questions) {
        this.constructBuyerAndSave(questions);
    };
    UIForBuyer.prototype.constructBuyerAndSave = function (questions) {
        var name, phone, requiredBloodGroup, requiredBloodAmount, question;
        questions.forEach(function (ques) {
            switch (ques) {
                case 'name':
                    question = "Please enter your name :";
                    name = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'phone':
                    question = "Please enter your phone number :";
                    phone = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'requiredBloodGroup':
                    question = "Which blood group do you require? :";
                    requiredBloodGroup = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'requiredBloodAmount':
                    question = "How much blood do you require? :";
                    requiredBloodAmount = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
            }
        });
        var bloodGroup = new BloodGroup_1["default"](requiredBloodGroup);
        this.buyer = new Buyer_1["default"](name, phone, bloodGroup, requiredBloodAmount);
    };
    UIForBuyer.prototype.getTheRequiredInfoAsObject = function () {
        return this.buyer;
    };
    return UIForBuyer;
}());
exports["default"] = UIForBuyer;
