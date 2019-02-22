function create () {
  // Create new object
  let obj = new Object();
  // Get the construct function
  let Con = [].shift.call(arguments);
  // Link to prototype
  obj.__proto__ = Con.prototype;
  // Bind this and execute constructor function
  let res = Con.apply(obj, arguments);
  // Ensure that the operation will return a object
  return typeof res === 'object' ? res : obj;
}