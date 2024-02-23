"use strict";
class Control {
    focus() {
        return "Control focused";
    }
}
class SelectableControl {
    select() {
        return "Control selected";
    }
}
class Button {
}
applyMixins(Button, [Control, SelectableControl]);
const button = new Button();
console.log(button.focus());
console.log(button.select());
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
        });
    });
}
