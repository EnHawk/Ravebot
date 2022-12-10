const { balanceSchema } = require(`../schemas/economy`);
const { Model } = require(`../meta/templates`);
// Imports

const balanceUser = Model(`balance`, balanceSchema);

module.exports = { balanceUser };
// Exports