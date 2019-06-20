"use strict";
exports.__esModule = true;
var BloodInfo = /** @class */ (function () {
    function BloodInfo(bloodGroup, plateletCount) {
        this.bloodGroup = bloodGroup;
        this.plateletCount = plateletCount;
    }
    BloodInfo.prototype.getbloodGroup = function () {
        return this.bloodGroup;
    };
    BloodInfo.prototype.getPlateletCount = function () {
        return this.plateletCount;
    };
    return BloodInfo;
}());
exports["default"] = BloodInfo;
