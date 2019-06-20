"use strict";
exports.__esModule = true;
var InventoryEntry = /** @class */ (function () {
    function InventoryEntry(bloodGroup, amountPresent) {
        this.bloodGroup = bloodGroup;
        this.amountPresent = amountPresent;
    }
    InventoryEntry.prototype.getBloodGroup = function () {
        return this.bloodGroup;
    };
    InventoryEntry.prototype.getAmountPresent = function () {
        return this.amountPresent;
    };
    InventoryEntry.prototype.updateAmountPresent = function (amountPresent) {
        this.amountPresent = amountPresent;
    };
    return InventoryEntry;
}());
exports["default"] = InventoryEntry;
