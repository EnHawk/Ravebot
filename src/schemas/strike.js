const { mongoose } = require(`../index`);
const { id, number } = require(`./meta`);
// Imports

const schema = new mongoose.Schema({
    userId: id,
    warnings: number,
    timeouts: number,
    kicks: number,
    bans: number,
    unbans: number
});

module.exports = mongoose.model(`strike`, schema);
// Exports