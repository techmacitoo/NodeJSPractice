"use strict";
var per = { id: 1, name: "Person 1", age: 30 };
function getPropertyValue(obj, key) {
    return obj[key];
}
console.log(getPropertyValue(per, "id"));
console.log(getPropertyValue(per, "name"));
console.log(getPropertyValue(per, "age"));
