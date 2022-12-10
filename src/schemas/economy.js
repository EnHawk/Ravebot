const { userId, Schema } = require(`../meta/templates`);
const { number } = require(`../meta/Number`);
// Imports

const balanceSchema = new Schema({
    userId,
    wallet: number,
    bank: number
});

module.exports = { balanceSchema };
// Exports