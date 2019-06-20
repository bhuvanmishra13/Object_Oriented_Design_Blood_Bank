"use strict";
exports.__esModule = true;
var Util_1 = require("../Util/Util");
var Donar_1 = require("../CoreClasses/Donar");
var BloodInfo_1 = require("../CoreClasses/BloodInfo");
var BloodGroup_1 = require("../CoreClasses/BloodGroup");
var UIForDonar = /** @class */ (function () {
    function UIForDonar() {
    }
    UIForDonar.prototype.displayQuestionsAndSaveTheRequiredInfo = function (questions) {
        this.constructDonarAndSave(questions);
    };
    UIForDonar.prototype.constructDonarAndSave = function (questions) {
        var name, phone, bloodGroup, plateletCount, question;
        questions.forEach(function (el) {
            switch (el) {
                case 'name':
                    question = "Please enter your name :";
                    name = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'phone':
                    question = "Please enter your phone number :";
                    phone = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'bloodGroup':
                    question = "Please enter your blood group :";
                    bloodGroup = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'plateletCount':
                    question = "Please enter your platelet count :";
                    plateletCount = new Util_1["default"]().displayQuestionAndGetResponseFromTerminal(question);
                    break;
            }
        });
        var bloodGroupObject = new BloodGroup_1["default"](bloodGroup);
        var bloodInfo = new BloodInfo_1["default"](bloodGroupObject, plateletCount);
        this.donar = new Donar_1["default"](name, phone, bloodInfo);
    };
    UIForDonar.prototype.getTheRequiredInfoAsObject = function () {
        return this.donar;
    };
    return UIForDonar;
}());
exports["default"] = UIForDonar;
