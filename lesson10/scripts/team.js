import { getJSON, getLocation } from './utilities.js';
import QuakesController  from './quakesController.js';

let quakers = new QuakesController('ul#quakeList');
quakers.init();

console.log(quakers);