"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var daterow;
var header;
var transactions = fs_1.default.readFileSync(path_1.default.resolve("C:\\Users\\Mark\\Google Drive\\Personal\\Credit Cards\\Statement for 05122019.csv"), {
    encoding: "utf-8"
})
    .split("\n")
    .filter(istransactionrow)
    .map(function (e) {
    return e.split(',')
        .filter(function (el) { return el != ''; })
        .map(function (el, index) { if (index < 2)
        return setyear(el, daterow[2]);
    else if (index == (2))
        return el;
    else
        return putsignfirst(el); })
        .reduce(function (accumulator, currval) { return accumulator.concat(',', currval); });
});
var shrinkheader = header.split(',')
    .filter(function (el) { return el != ''; })
    .reduce(function (accumulator, currval) { return accumulator.concat(',', currval); });
//transactions.filter(addyear)
//             .map(function (el,index) {if (index <2) return [el.substr(0,2), el.substr(2,2), daterow[2].substr(4,4)].join('-'); else return el;})
function putsignfirst(str) {
    if (str.indexOf('-') > 0) {
        str = '-'.concat(str.replace('-', ''));
    }
    return str;
}
function setyear(daymonth, statementdate) {
    var previousyear = (parseInt((statementdate.substr(4, 4))) - 1).toString();
    if (daymonth.substr(2, 2) == '12')
        return [daymonth.substr(0, 2), daymonth.substr(2, 2), previousyear].join('-');
    else
        return [daymonth.substr(0, 2), daymonth.substr(2, 2), statementdate.substr(4, 4)].join('-');
}
function istransactionrow(value) {
    var row = value.split(",");
    if (row[2] == "POSTING DATE")
        header = value;
    if (parseInt(row[2]) > 1 && (row[7]) === '')
        daterow = value.split(",");
    if (parseInt(row[2]) > 1 && parseInt(row[7]) > 1)
        return value;
}
function addyear(value) {
    //const col: string[] = 
    value.split(",")
        .filter(function (el) { return el != ''; });
    //.map(function (el)  {return el.concat('2007');});//[e , '2007'/*daterow[2].substring(4,8)*/].join('')}); 
    //console.log (value);
    return value;
}
/*
  return [col[2],',',col[7],',', col[16],',',col[37],',',col[45]].join('');
return [value.slice(0,4),'-',value.slice(4,6),'-', daterow[2].substring(4,8),
        value.slice(6,13),'-',value.slice(13,15),'-',daterow[2].substring(4,8),value.slice(15)].join('');
*/
//     });
//   }
function readanitquatedcsv(myfile) {
    var s;
}
// test
console.log(transactions);
console.log(daterow);
console.log(shrinkheader);
console.log(addyear(',,1012,,,,,1012,,,,,,,,,T.W. METALS - KINGSTON 11,,,,,,,,,,,,,,,,,,,,,1483.80,,,,,,,,1483.80,,'));
console.log((',,1012,,,,,1012,,,,,,,,,T.W. METALS - KINGSTON 11,,,,,,,,,,,,,,,,,,,,,1483.80,,,,,,,,1483.80,,')
    .split(",").filter(addyear)
    .map(function (el, index) { if (index < 2)
    return [el.substr(0, 2), el.substr(2, 2), daterow[2].substr(4, 4)].join('-');
else
    return el; })
    .reduce(function (accumulator, currval) { return accumulator.concat(',', currval); }), console.log(setyear('1011', "02,02,2001")));
