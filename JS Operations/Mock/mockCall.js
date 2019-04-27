Function.prototype.call2 = function (context = window) {
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

let foo = {
    value: 1
}

function bar (name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.call2(foo, 'John', 18);