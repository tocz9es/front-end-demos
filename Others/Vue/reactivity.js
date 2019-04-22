// As we know, Vue using Object.defineProperty() to update data.

let obj = {
  a: 10
};

observer(obj, 'a');
obj.a = 20;
let b = obj.a;
obj.a = 30;

// You can observe only one value by using this function.
function observer(obj, key) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      console.log(`getting key ${key}`);
    },
    set(val) {
      console.log(`setting key ${key}: ${val}`);
    }
  });
}

// You can observe all the key in object by using this function. (only one layer)
function observer(obj) {
  Object.key(obj).forEach(key => {
    let internalValue = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        console.log(`getting key ${key}: ${internalValue}`);
        return internalValue;
      },
      set(newValue) {
        console.log(`setting key ${key} to ${internalValue}`);
        internalValue = newValue;
      }
    })
  })
}