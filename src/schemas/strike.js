const { mongoose } = require(`../index`);
// Imports

const schema = new mongoose.Schema({
    userId: String,
    warnings: Number,
    timeouts: Number,
    kicks: Number,
    bans: Number,
    unbans: Number
});

module.exports = mongoose.model(`strike`, schema);
// Exports