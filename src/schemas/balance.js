const { mongoose } = require(`../index`);
const { strUniqueRequired, number } = require(`./meta`);
// Imports

const schema = new mongoose.Schema({
    userId: strUniqueRequired,
    wallet: number,
    bank: number
});

module.exports = mongoose.model(`balance`, schema)
// Exports