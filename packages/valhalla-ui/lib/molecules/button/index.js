"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var label = _a.label;
    return react_1["default"].createElement("button", null, label);
};
exports.Button = Button;
exports["default"] = exports.Button;
