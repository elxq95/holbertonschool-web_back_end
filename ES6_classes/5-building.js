export default class Building {
    constructor(sqft) {
      // Validate the input type
      if (typeof sqft !== 'number') {
        throw new TypeError('Sqft must be a number');
      }
  
      // Assign the value to the underscore attribute
      this._sqft = sqft;
  
      // Ensure the class is abstract
      if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  }