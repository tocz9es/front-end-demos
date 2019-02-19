// debounce Lite Version

function debounceLite (func, wait) {
  let timeout = null;
  return () => {
    if (timeout !== null) return clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  }
}

function handle () {
  console.log(new Date(), Math.random());
}

window.addEventListener('scroll', debounce(handle, 1000));

// debounce Simple Version

const debounce = (func, wait = 50) => {
  let timer = 0;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apple(this.args);
    }, wait)
  }
}

// debounce Full Version

function debounce (func, wait = 50, immediate) {
  let timer, context, args;

  const later = () => setTimeout(() => {
    timer = null;

    if (immediate) {
      func.apply(context, args);
      context = args = null;
    }
  }, wait)

  return (...params) => {
    if (!timer) {
      timer = later();
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this;
        args = params;
      }
    } else {
      clearTimeout(timer);
      timer = later();
    }
  }
}