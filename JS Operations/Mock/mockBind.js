function func(x) {
  console.log(x, this.y);
}

// your code here

Function.prototype._bind = function(newThis) {
  var aArgs = Array.prototype.slice.call(arguments, 1);
  var that = this;
  return function() {
    return that.apply(newThis, aArgs.concat(Array.prototype.slice.call(arguments)));
  }
}

Function.prototype.bind2 = function(content) {
  if (typeof this != 'function') {
    throw Error('Not a function!');
  }
  let fn = this;
  let args = [...arguments].slice(1);

  let resFn = function() {
    return fn.apply(this instanceof resFn ? this : content, args.concat(...arguments))
  }
  function tmp() {}
  tmp.prototype = this.prototype;
  resFn.prototype = new tmp();

  return resFn;
}

// for testing

func._bind({y: 'foo'}) () //undefined "foo"

func._bind() (); // undefined undefined

func._bind({y: 'bar'}, 'foo')(); // "foo" "bar"