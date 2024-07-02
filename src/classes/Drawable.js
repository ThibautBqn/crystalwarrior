const Drawable = function(superclass) {
  if (superclass) {
    return class extends superclass {
      draw() {
        throw new Error('You must implement draw function in your children class');
      }
    };
  } else {
    return class {
      draw() {
        throw new Error('You must implement draw function in your children class');
      }
    };
  }
}