const { mongoose } = require(`../index`);
// Imports

const schema = new mongoose.Schema({
    userId: String,
    wallet: Number,
    bank: Number,
});

module.exports = mongoose.model(`balance`, schema)
// Exports