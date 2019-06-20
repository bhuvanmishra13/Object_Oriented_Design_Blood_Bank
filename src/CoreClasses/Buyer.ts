import Person from "./Person";
import BloodGroup from "./BloodGroup";

class Buyer extends Person {
    private requiredBloodGroup: BloodGroup;
    private requiredBloodAmount: number;

    constructor(name: string, phone: number, requiredBloodGroup: BloodGroup, requiredBloodAmount: number) {
        super(name, phone);
        this.requiredBloodGroup = requiredBloodGroup;
        this.requiredBloodAmount = requiredBloodAmount;
    }

    getBuyerName() {
        return this.name;
    }

    getBuyerPhone() {
        return this.phone;
    }

    getBuyerBloodGroup() {
        return this.requiredBloodGroup;
    }

    getBuyerRequiredBloodAmount() {
        return this.requiredBloodAmount;
    }
}

export default Buyer;