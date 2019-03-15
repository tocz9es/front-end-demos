// Solution 1: Normal CloneDeep
JSON.parse(JSON.stringify(source));

// Solution 2: Using ES6 WeakMap()
function cloneDeepA (source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source);

  let target = Array.isArray(source) ? [] : {};
  hash.set(source, target);

  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeepA(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

function isObject (obj) {
  return typeof obj === 'object' && obj !== null;
}

// Solution 3: Using Array
function cloneDeepB (source, uniqueList) {
  if (!isObject(source)) return source;
  if (!uniqueList) uniqueList = [];

  let target = Array.isArray(source) ? [] : {};
  let uniqueData = find(uniqueList, source);

  // If data exist, return saved data
  if (uniqueData) return uniqueData.target;

  // If data not exist, save source data and the corresponding refs.
  uniqueList.push({
    source: source,
    target: target
  });

  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeepB(source[key], uniqueList);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

function find (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source === item) {
      return arr[i];
    }
  }
  return null;
}