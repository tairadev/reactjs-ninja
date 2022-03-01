'use strict';

console.assert(counter(0, { type: 'INCREMENT' }) === 1);
console.assert(counter(0, { type: 'DECREMENT' }) === -1);
console.assert(counter(0, { type: 'SOMETHING' }) === 0);
console.assert(counter(undefined, {}) === 0);
