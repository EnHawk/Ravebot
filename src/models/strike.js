const { Model } = require(`../meta/templates`);
const { warningSchema, timeoutSchema, kickSchema, banSchema } = require(`../schemas/strike`);
// Imports

const warningUser = Model(`warning`, warningSchema);
const timeoutUser = Model(`timeout`, timeoutSchema);
const kickUser = Model(`kick`, kickSchema);
const banUser = Model(`ban`, banSchema);

module.exports = { warningUser, timeoutUser, kickUser, banUser };
// Exports