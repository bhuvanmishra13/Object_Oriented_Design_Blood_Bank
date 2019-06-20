import Util from '../Util/Util';
import UIPromptQuestionAndGetResponse from '../Interfaces/UIPromptQuestionAndGetResponse';

class UIPromptForAction implements UIPromptQuestionAndGetResponse {


    responseIndicatingWhetherUserIsBuyerOrDonor: string;


    displayQuestionsAndSaveTheRequiredInfo(questions: string[]) {
        questions.forEach((el) => {
            this.responseIndicatingWhetherUserIsBuyerOrDonor = new Util().displayQuestionAndGetResponseFromTerminal(el);
        });

    }

    getTheRequiredInfoAsObject(): string {
        return this.responseIndicatingWhetherUserIsBuyerOrDonor;
    }

}

export default UIPromptForAction;