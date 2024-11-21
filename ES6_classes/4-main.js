import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p); // Pricing { _amount: 100, _currency: Currency { _code: 'EUR', _name: 'Euro' } }
console.log(p.displayFullPrice()); // 100 Euro (EUR)

// Using the static method
console.log(Pricing.convertPrice(100, 1.2)); // 120