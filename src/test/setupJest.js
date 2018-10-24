
/**
 * JSDom does not implement CSSOM so we're stubbing them out
 *
 * TIP: If encounter that a dom property is undefined first check to
 * see if the property is implemented in JSDOM by searching github issues
 * or by writing a test where the property should be defined.
 */
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
  },
  offsetParent: {
    get() { return this.parentNode; }
  },
});