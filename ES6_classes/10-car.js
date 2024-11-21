export default class Car {
    constructor(brand, motor, color) {
      // Validate inputs
      if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
        throw new TypeError('All attributes must be strings');
      }
  
      // Assign to underscore-prefixed attributes
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Method to clone the car
    cloneCar() {
      const NewCar = this.constructor[Symbol.species] || this.constructor;
      return new NewCar();
    }
  
    // Static getter for Symbol.species
    static get [Symbol.species]() {
      return this;
    }
  }