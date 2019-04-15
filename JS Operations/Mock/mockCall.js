Function.prototype.call2 = function (content = window) {
    content.fn = this; // Point this to 
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content.fn;
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