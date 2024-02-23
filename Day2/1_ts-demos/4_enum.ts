// function Open(mode: string) {
//     console.log(`File opened in "${mode}" mode`);
// }

// function Open(mode: string) {
//     switch (mode) {
//         case "Read":
//         case "Write":
//         case "Append":
//         case "ReadAndWrite":
//             console.log(`File opened in "${mode}" mode`);
//             break;
//         default:
//             console.log(`Invalid mode "${mode}"`);
//             break;
//     }
// }

// Open("Read");
// Open("Write");
// Open("Append");
// Open("ReadAndWrite");
// Open("Himanshu");
// Open("Abhishek");
// Open("Mahendra");

// ---------------------------------
// Enums allow you to define a set of constraints on the values that can be used in your code.

// enum FileMode { Read, Write, Append, ReadAndWrite }
// enum FileMode { Read = 10, Write = 20, Append, ReadAndWrite }
enum FileMode { Read = "Read", Write = "Write", Append = "Append", ReadAndWrite = "ReadAndWrite" }
// enum FileMode { Read = "Read", Write = "Write", Append = 10, ReadAndWrite }

function Open(mode: FileMode) {
    console.log(`File opened in "${mode}" mode`);
}

Open(FileMode.Read);
Open(FileMode.Write);
Open(FileMode.Append);
Open(FileMode.ReadAndWrite);
// Open("Himanshu");

enum BankingEnum {
    ADD_BENE
}

const BankingInfo = {
    [BankingEnum.ADD_BENE]: { serviceURL: "abc/xyz", method: "POST", description: "Add Beneficiaries" }
}

const addBeneInfo = BankingInfo[BankingEnum.ADD_BENE];
console.log(addBeneInfo.description);