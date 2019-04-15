Function.prototype.apply2 = function (context = window) {
    context.fn = this;
    let result;
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

let foo = {
    value: 1
};

function bar (name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.apply2(foo, ['John', 18]);