"use strict";
exports.__esModule = true;
var InventoryEntry_1 = require("./InventoryEntry");
var BloodBank = /** @class */ (function () {
    function BloodBank() {
        this.defaultAmountToDonate = 2;
        this.inventory = [];
    }
    BloodBank.prototype.donateBlood = function (bloodInfo) {
        if (bloodInfo.getPlateletCount() > 300) {
            var donateInventoryEntry = new InventoryEntry_1["default"](bloodInfo.getbloodGroup(), this.defaultAmountToDonate);
            this.addToInventory(donateInventoryEntry);
            return true;
        }
        else {
            console.log("Platelet count is too less. Cannot Donate Blood");
            return false;
        }
    };
    BloodBank.prototype.addToInventory = function (inventoryEntry) {
        var bloodGroup = this.doesBloodGroupExist(inventoryEntry.getBloodGroup());
        if (bloodGroup) {
            var updatedInventory = this.inventory.map(function (el) {
                if (el.getBloodGroup().getBloodGroup() === inventoryEntry.getBloodGroup().getBloodGroup()) {
                    var inventoryEntryLocal = el;
                    inventoryEntryLocal.updateAmountPresent(inventoryEntryLocal.getAmountPresent() + inventoryEntry.getAmountPresent());
                    return inventoryEntryLocal;
                }
                else {
                    return el;
                }
            });
            this.inventory = updatedInventory;
        }
        else {
            this.inventory.push(inventoryEntry);
        }
    };
    BloodBank.prototype.checkIfBloodGroupAndRequiredAmountExists = function (bloodGroup, amount) {
        var doesBloodGroupExist;
        doesBloodGroupExist = this.doesBloodGroupExist(bloodGroup);
        if (doesBloodGroupExist) {
            var bloodGroupEntry = this.inventory.find(function (el) {
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
    };
    BloodBank.prototype.doesBloodGroupExist = function (bloodGroup) {
        var foundBloodGroup = this.inventory.find(function (el) {
            if (el.getBloodGroup().getBloodGroup() === bloodGroup.getBloodGroup()) {
                return true;
            }
            else {
                return false;
            }
        });
        if (foundBloodGroup) {
            return true;
        }
        else {
            return false;
        }
    };
    BloodBank.prototype.aquireBlood = function (bloodGroup, amount) {
        return this.checkAndSubtractAmountFromInventory(bloodGroup, amount);
    };
    BloodBank.prototype.checkAndSubtractAmountFromInventory = function (bloodGroup, amount) {
        if (this.checkIfBloodGroupAndRequiredAmountExists(bloodGroup, amount)) {
            var updatedInventory = this.inventory.map(function (el) {
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
    };
    BloodBank.prototype.getInventory = function () {
        return this.inventory;
    };
    return BloodBank;
}());
exports["default"] = BloodBank;
