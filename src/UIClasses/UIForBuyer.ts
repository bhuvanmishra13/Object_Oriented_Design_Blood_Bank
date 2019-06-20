import UI from "../Interfaces/UIPromptQuestionAndGetResponse";
import Util from '../Util/Util';
import Buyer from "../CoreClasses/Buyer";
import BloodGroup from "../CoreClasses/BloodGroup";

class UIForBuyer implements UI {

    buyer: Buyer;
    displayQuestionsAndSaveTheRequiredInfo(questions: string[]): void {
        this.constructBuyerAndSave(questions);
    }

    private constructBuyerAndSave(questions: string[]) {
        let name: string, phone: number, requiredBloodGroup: string, requiredBloodAmount: number, question;

        questions.forEach((ques) => {
            switch (ques) {
                case 'name':
                    question = "Please enter your name :";
                    name = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'phone':
                    question = "Please enter your phone number :";
                    phone = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'requiredBloodGroup':
                    question = "Which blood group do you require? :";
                    requiredBloodGroup = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'requiredBloodAmount':
                    question = "How much blood do you require? :";
                    requiredBloodAmount = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
            }
        });

        let bloodGroup = new BloodGroup(requiredBloodGroup);

        this.buyer = new Buyer(name, phone, bloodGroup, requiredBloodAmount);
    }

    getTheRequiredInfoAsObject() {
        return this.buyer;
    }


}

export default UIForBuyer;