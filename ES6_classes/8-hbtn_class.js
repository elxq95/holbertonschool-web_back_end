export default class HolbertonClass {
    constructor(size, location) {
      // Validate input types
      if (typeof size !== 'number') {
        throw new TypeError('Size must be a number');
      }
      if (typeof location !== 'string') {
        throw new TypeError('Location must be a string');
      }
  
      // Assign values to underscore attributes
      this._size = size;
      this._location = location;
    }
  
    // Custom behavior when casting to Number
    valueOf() {
      return this._size;
    }
  
    // Custom behavior when casting to String
    toString() {
      return this._location;
    }
  }