const { mongoose } = require(`../index`);
const schema = require(`../schemas/strike`);
// Imports

module.exports = mongoose.model(`strike`, schema);
// Exports