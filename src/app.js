"use strict";
exports.__esModule = true;
var UIPromptForAction_1 = require("./UIClasses/UIPromptForAction");
var UIForDonar_1 = require("./UIClasses/UIForDonar");
var BloodBank_1 = require("./CoreClasses/BloodBank");
var UIForBuyer_1 = require("./UIClasses/UIForBuyer");
var uIPromptForAction = new UIPromptForAction_1["default"]();
var bloodBank = new BloodBank_1["default"]();
while (true) {
    uIPromptForAction.displayQuestionsAndSaveTheRequiredInfo(["Are you a Donar or a Buyer?"]);
    var ans = uIPromptForAction.getTheRequiredInfoAsObject();
    switch (ans) {
        case 'Donar':
            var uIForDonar = new UIForDonar_1["default"]();
            uIForDonar.displayQuestionsAndSaveTheRequiredInfo(["name", "phone", "bloodGroup", "plateletCount"]);
            var donar = uIForDonar.getTheRequiredInfoAsObject();
            if (!donar.getDonarBloodInfo().getbloodGroup().isBloodGroupSet()) {
                continue;
            }
            var wasDonateSuccessful = bloodBank.donateBlood(donar.getDonarBloodInfo());
            if (!wasDonateSuccessful) {
                continue;
            }
            console.log(bloodBank.getInventory());
            break;
        case 'Buyer':
            var uIForBuyer = new UIForBuyer_1["default"]();
            uIForBuyer.displayQuestionsAndSaveTheRequiredInfo(["name", "phone", "requiredBloodGroup", "requiredBloodAmount"]);
            var buyer = uIForBuyer.getTheRequiredInfoAsObject();
            if (!buyer.getBuyerBloodGroup().isBloodGroupSet()) {
                continue;
            }
            var wasAquireSuccessful = bloodBank.aquireBlood(buyer.getBuyerBloodGroup(), buyer.getBuyerRequiredBloodAmount());
            if (!wasAquireSuccessful) {
                continue;
            }
            console.log(bloodBank.getInventory());
            break;
    }
}
