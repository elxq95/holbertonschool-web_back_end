export default class Currency {
    constructor(code, name) {
      // Validate the input types
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
  
      // Assign the values to the underscore attributes
      this._code = code;
      this._name = name;
    }
  
    // Getter and Setter for code
    get code() {
      return this._code;
    }
  
    set code(newCode) {
      if (typeof newCode !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = newCode;
    }
  
    // Getter and Setter for name
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    // Method to display full currency
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }