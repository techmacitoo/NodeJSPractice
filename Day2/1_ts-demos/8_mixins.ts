// --------------------------------------------------- Interface can extend from class(es)
class Control {
    focus(): string {
        return "Control focused";
    }
}

class SelectableControl {
    select(): string {
        return "Control selected";
    }
}

class Button { }
interface Button extends Control, SelectableControl { }

applyMixins(Button, [Control, SelectableControl]);

const button = new Button();
console.log(button.focus());
console.log(button.select());

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
            );
        });
    });
}

// 1. The applyMixins function takes a constructor and a list of constructors to mix into the first one.
// 2. It works by copying each method from the source constructors to the target constructor's prototype.
// 3. The Object.defineProperty call makes sure the properties are non-enumerable, just like the normal class methods.
// 4. The Object.getOwnPropertyDescriptor call is used to copy properties as well. This is useful for things like static properties.
// 5. The Object.create(null) call is used to create a new object with no prototype. This is used to avoid copying inherited properties.
// 6. The end result is a class that has all the methods of the source constructors, as well as its own methods.

// Mixins can be used to enhance classes with additional functionality without traditional inheritance, 
// enabling a more flexible and composable design.