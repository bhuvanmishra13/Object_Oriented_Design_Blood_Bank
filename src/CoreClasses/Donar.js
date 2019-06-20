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
var Donar = /** @class */ (function (_super) {
    __extends(Donar, _super);
    function Donar(name, phone, bloodInfo) {
        var _this = _super.call(this, name, phone) || this;
        _this.bloodInfo = bloodInfo;
        return _this;
    }
    Donar.prototype.getDonarName = function () {
        return this.name;
    };
    Donar.prototype.getDonarPhone = function () {
        return this.phone;
    };
    Donar.prototype.getDonarBloodInfo = function () {
        return this.bloodInfo;
    };
    return Donar;
}(Person_1["default"]));
exports["default"] = Donar;
