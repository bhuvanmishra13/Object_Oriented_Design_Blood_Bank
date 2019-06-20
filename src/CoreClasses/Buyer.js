"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
var Buyer = /** @class */ (function (_super) {
    __extends(Buyer, _super);
    function Buyer(name, phone, requiredBloodGroup, requiredBloodAmount) {
        var _this = _super.call(this, name, phone) || this;
        _this.requiredBloodGroup = requiredBloodGroup;
        _this.requiredBloodAmount = requiredBloodAmount;
        return _this;
    }
    Buyer.prototype.getBuyerName = function () {
        return this.name;
    };
    Buyer.prototype.getBuyerPhone = function () {
        return this.phone;
    };
    Buyer.prototype.getBuyerBloodGroup = function () {
        return this.requiredBloodGroup;
    };
    Buyer.prototype.getBuyerRequiredBloodAmount = function () {
        return this.requiredBloodAmount;
    };
    return Buyer;
}(Person_1["default"]));
exports["default"] = Buyer;
