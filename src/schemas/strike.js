const { mongoose } = require(`../index`);
const { userId, __v } = require(`../meta/templates`);
const { number } = require(`../meta/Number`);
// Imports

module.exports = new mongoose.Schema({
    userId,
    warnings: number,
    timeouts: number,
    kicks: number,
    total: number,
    __v
});
// Exports