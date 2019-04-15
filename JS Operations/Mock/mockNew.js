function _new (fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function _new (func) {
  return function () {
    const obj = { __proto__: func.prototype }
    func.apply(obj, arguments);
    return obj;
  }
}

function _new (func) {
  let res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  let ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    return ret;
  }
  return res;
}
