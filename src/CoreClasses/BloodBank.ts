import InventoryEntry from "./InventoryEntry";
import BloodGroup from "./BloodGroup";
import BloodInfo from "./BloodInfo";

class BloodBank {
    private inventory: InventoryEntry[];
    private defaultAmountToDonate: number = 2;

    constructor() {
        this.inventory = [];
    }

    donateBlood(bloodInfo: BloodInfo): boolean {
        if (bloodInfo.getPlateletCount() > 300) {
            let donateInventoryEntry = new InventoryEntry(bloodInfo.getbloodGroup(), this.defaultAmountToDonate);
            this.addToInventory(donateInventoryEntry);
            return true;
        }
        else {
            console.log("Platelet count is too less. Cannot Donate Blood");
            return false;
        }
    }

    private addToInventory(inventoryEntry: InventoryEntry) {
        let bloodGroup = this.doesBloodGroupExist(inventoryEntry.getBloodGroup());



        if (bloodGroup) {
            let updatedInventory = this.inventory.map((el) => {
                if (el.getBloodGroup().getBloodGroup() === inventoryEntry.getBloodGroup().getBloodGroup()) {
                    let inventoryEntryLocal = el;
                    inventoryEntryLocal.updateAmountPresent(inventoryEntryLocal.getAmountPresent() + inventoryEntry.getAmountPresent());
                    return inventoryEntryLocal;
                }
                else {
                    return el
                }
            });



            this.inventory = updatedInventory;
        }
        else {
            this.inventory.push(inventoryEntry);
        }
    }

    private checkIfBloodGroupAndRequiredAmountExists(bloodGroup: BloodGroup, amount: number): boolean {

        let doesBloodGroupExist;
        doesBloodGroupExist = this.doesBloodGroupExist(bloodGroup);

        if (doesBloodGroupExist) {
            let bloodGroupEntry = this.inventory.find((el) => {
                if (el.getBloodGroup().getBloodGroup() === bloodGroup.getBloodGroup()) {
                    return true;
                }
                else {
                    return false;
                }
            });

            if (bloodGroupEntry.getAmountPresent() >= amount) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    private doesBloodGroupExist(bloodGroup: BloodGroup): boolean {
        let foundBloodGroup = this.inventory.find((el) => {
            if (el.getBloodGroup().getBloodGroup() === bloodGroup.getBloodGroup()) {
                return true;
            }
            else {
                return false
            }
        })

        if (foundBloodGroup) {
            return true;
        }
        else {
            return false;
        }
    }


    aquireBlood(bloodGroup: BloodGroup, amount: number): boolean {
        return this.checkAndSubtractAmountFromInventory(bloodGroup, amount);
    }

    private checkAndSubtractAmountFromInventory(bloodGroup: BloodGroup, amount: number): boolean {
        if (this.checkIfBloodGroupAndRequiredAmountExists(bloodGroup, amount)) {
            let updatedInventory = this.inventory.map((el) => {
                if (el.getBloodGroup().getBloodGroup() === bloodGroup.getBloodGroup()) {
                    el.updateAmountPresent(el.getAmountPresent() - amount);
                    return el;
                }
                else {
                    return el;
                }
            });

            this.inventory = updatedInventory;
            return true;
        }
        else {
            console.log("Blood group or required amount does not exist!");
            return false;
        }
    }

    getInventory() {
        return this.inventory;
    }
}

export default BloodBank;