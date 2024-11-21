import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor to initialize sqft
    super(sqft);

    // Validate the floors input
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Assign floors to the underscore attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}