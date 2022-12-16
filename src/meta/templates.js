const { strUniqueRequired } = require(`./String`);
const { number } = require(`./Number`);
const { mongoose } = require(`../index`);
// Imports

const userId = strUniqueRequired;
const __v = number;

module.exports = { userId, __v };
// Exports