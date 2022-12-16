const { mongoose } = require(`../index`);
const { userId, __v } = require(`../meta/templates`);
const { number } = require(`../meta/Number`);
// Imports

module.exports = new mongoose.Schema({
    userId,
    wallet: number,
    bank: number,
    __v
});
// Exports