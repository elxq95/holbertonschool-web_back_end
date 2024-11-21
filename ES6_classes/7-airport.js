export default class Airport {
    constructor(name, code) {
      // Validate input types
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      // Assign values to underscore attributes
      this._name = name;
      this._code = code;
    }
  
    // Custom string representation using `toString`
    toString() {
      return `[object ${this._code}]`;
    }
  }