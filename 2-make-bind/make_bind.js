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

// for testing

func._bind({y: 'foo'}) () //undefined "foo"

func._bind() (); // undefined undefined

func._bind({y: 'bar'}, 'foo')(); // "foo" "bar"