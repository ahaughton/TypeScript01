"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var transactions = fs_1.default
    .readFileSync("Statement for 05012019.csv", {
    encoding: "utf-8"
})
    .split("\n")
    .filter(istransactionrow);
function istransactionrow(value) {
    var row = value.split(",");
    if (parseInt(row[2]) > 1)
        return value;
}
console.log(transactions);
