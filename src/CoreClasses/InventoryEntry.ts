import BloodGroup from "./BloodGroup";

class InventoryEntry {
    private bloodGroup: BloodGroup;
    private amountPresent: number;

    constructor(bloodGroup: BloodGroup, amountPresent: number) {
        this.bloodGroup = bloodGroup;
        this.amountPresent = amountPresent;
    }

    getBloodGroup(): BloodGroup {
        return this.bloodGroup;
    }

    getAmountPresent() {
        return this.amountPresent;
    }

    updateAmountPresent(amountPresent: number) {
        this.amountPresent = amountPresent;
    }
}

export default InventoryEntry;