import UIPromptQuestionAndGetResponse from '../Interfaces/UIPromptQuestionAndGetResponse';
import Util from '../Util/Util';
import Donar from '../CoreClasses/Donar';
import BloodInfo from '../CoreClasses/BloodInfo';
import BloodGroup from '../CoreClasses/BloodGroup';

class UIForDonar implements UIPromptQuestionAndGetResponse {

    private donar: Donar;

    displayQuestionsAndSaveTheRequiredInfo(questions: string[]) {
        this.constructDonarAndSave(questions);
    }

    constructDonarAndSave(questions: string[]) {

        let name, phone, bloodGroup, plateletCount, question;

        questions.forEach((el) => {

            switch (el) {
                case 'name':
                    question = "Please enter your name :";
                    name = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'phone':
                    question = "Please enter your phone number :";
                    phone = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'bloodGroup':
                    question = "Please enter your blood group :";
                    bloodGroup = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
                case 'plateletCount':
                    question = "Please enter your platelet count :";
                    plateletCount = new Util().displayQuestionAndGetResponseFromTerminal(question);
                    break;
            }

        });

        let bloodGroupObject = new BloodGroup(bloodGroup);
        let bloodInfo = new BloodInfo(bloodGroupObject, plateletCount);
        this.donar = new Donar(name, phone, bloodInfo);

    }

    getTheRequiredInfoAsObject() {
        return this.donar;
    }

}

export default UIForDonar;