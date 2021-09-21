'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];
const evenPins = users.filter((users) => users.pin % 2 === 0);
const userEvenName = evenPins.map((users) => users.name);
const userEvenPin = evenPins.map((users) => users.pin);
console.log(userEvenName);
console.log(userEvenPin);