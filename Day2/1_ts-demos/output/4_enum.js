"use strict";
var FileMode;
(function (FileMode) {
    FileMode["Read"] = "Read";
    FileMode["Write"] = "Write";
    FileMode["Append"] = "Append";
    FileMode["ReadAndWrite"] = "ReadAndWrite";
})(FileMode || (FileMode = {}));
function Open(mode) {
    console.log(`File opened in "${mode}" mode`);
}
Open(FileMode.Read);
Open(FileMode.Write);
Open(FileMode.Append);
Open(FileMode.ReadAndWrite);
var BankingEnum;
(function (BankingEnum) {
    BankingEnum[BankingEnum["ADD_BENE"] = 0] = "ADD_BENE";
})(BankingEnum || (BankingEnum = {}));
const BankingInfo = {
    [BankingEnum.ADD_BENE]: { serviceURL: "abc/xyz", method: "POST", description: "Add Beneficiaries" }
};
const addBeneInfo = BankingInfo[BankingEnum.ADD_BENE];
console.log(addBeneInfo.description);
