const { mongoose } = require(`../index`);
const schema = require(`../schemas/economy`);
// Imports

module.exports = mongoose.model(`balance`, schema);
// Exports