const { mongoose } = require(`../index`);
const { id, number } = require(`./meta`);
// Imports

const schema = new mongoose.Schema({
    userId: id,
    wallet: number,
    bank: number
});

module.exports = mongoose.model(`balance`, schema)
// Exports