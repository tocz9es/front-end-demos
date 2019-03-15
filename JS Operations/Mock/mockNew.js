function _new (fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function _new (func) {
  return function () {
    const obj = {__proto__: func.prototype}
    func.apply(obj, arguments);
    return obj;
  }
}