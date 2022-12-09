const { mongoose } = require(`../index`);
const { strUniqueRequired, number } = require(`./meta`);
// Imports

const schema = new mongoose.Schema({
    userId: strUniqueRequired,
    warnings: number,
    timeouts: number,
    kicks: number,
    bans: number,
    unbans: number
});

module.exports = mongoose.model(`strike`, schema);
// Exports