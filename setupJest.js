
Object.defineProperties(HTMLElement.prototype, {
  offsetLeft: {
    get() { return parseFloat(window.getComputedStyle(this).marginLeft) || 0; }
  },
  offsetTop: {
    get() { return parseFloat(window.getComputedStyle(this).marginTop) || 0; }
  },
  offsetHeight: {
    get() { return parseFloat(window.getComputedStyle(this).height) || 0; }
  },
  offsetWidth: {
    get() { return parseFloat(window.getComputedStyle(this).width) || 0; }
  }
});