"use strict";
exports.__esModule = true;
var BloodGroup = /** @class */ (function () {
    function BloodGroup(bloodGroup) {
        this.bloodGroup = null;
        switch (bloodGroup) {
            case 'O+':
                this.bloodGroup = bloodGroup;
                break;
            case 'O-':
                this.bloodGroup = bloodGroup;
                break;
            default:
                console.log("Blood group not supported!");
        }
    }
    BloodGroup.prototype.getBloodGroup = function () {
        return this.bloodGroup;
    };
    BloodGroup.prototype.isBloodGroupSet = function () {
        if (this.bloodGroup === null) {
            return false;
        }
        else {
            return true;
        }
    };
    return BloodGroup;
}());
exports["default"] = BloodGroup;
