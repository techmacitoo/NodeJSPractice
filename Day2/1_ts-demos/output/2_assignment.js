"use strict";
function Reverse(strOrArr) {
    if (typeof strOrArr === "string") {
        return strOrArr.split("").reverse();
    }
    else {
        return strOrArr.reverse();
    }
}
console.log(Reverse("Manish"));
console.log(Reverse(["PQR", "XYZ", "ABC"]));
console.log(Reverse([10, 20, 30, 40]));
