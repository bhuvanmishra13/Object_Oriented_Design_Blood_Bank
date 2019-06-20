import UIPromptForAction from './UIClasses/UIPromptForAction';
import UIForDonar from './UIClasses/UIForDonar';
import BloodBank from './CoreClasses/BloodBank';
import Donar from './CoreClasses/Donar';
import UIForBuyer from './UIClasses/UIForBuyer';
import Buyer from './CoreClasses/Buyer';

let uIPromptForAction = new UIPromptForAction();
let bloodBank = new BloodBank();

while (true) {
  uIPromptForAction.displayQuestionsAndSaveTheRequiredInfo(["Are you a Donar or a Buyer?"]);
  let ans = uIPromptForAction.getTheRequiredInfoAsObject();

  switch (ans) {
    case 'Donar':
      let uIForDonar = new UIForDonar();
      uIForDonar.displayQuestionsAndSaveTheRequiredInfo(["name", "phone", "bloodGroup", "plateletCount"]);
      let donar: Donar = uIForDonar.getTheRequiredInfoAsObject();
      if (!donar.getDonarBloodInfo().getbloodGroup().isBloodGroupSet()) {
        continue;
      }
      let wasDonateSuccessful = bloodBank.donateBlood(donar.getDonarBloodInfo());
      if (!wasDonateSuccessful) {
        continue;
      }
      console.log(bloodBank.getInventory());
      break;

    case 'Buyer':
      let uIForBuyer = new UIForBuyer();
      uIForBuyer.displayQuestionsAndSaveTheRequiredInfo(["name", "phone", "requiredBloodGroup", "requiredBloodAmount"]);
      let buyer: Buyer = uIForBuyer.getTheRequiredInfoAsObject();
      if (!buyer.getBuyerBloodGroup().isBloodGroupSet()) {
        continue;
      }
      let wasAquireSuccessful = bloodBank.aquireBlood(buyer.getBuyerBloodGroup(), buyer.getBuyerRequiredBloodAmount());
      if (!wasAquireSuccessful) {
        continue
      }
      console.log(bloodBank.getInventory());
      break;
  }
}