const { Schema, userId, Model } = require(`../meta/templates`);
const { number } = require(`../meta/Number`);
// Imports

const warningSchema = new Schema({ userId, warnings: number });
const timeoutSchema = new Schema({ userId, timeouts: number });
const kickSchema = new Schema({ userId, kicks: number });
const banSchema = new Schema({ userId, bans: number, unbans: number });



module.exports = { warningSchema, timeoutSchema, kickSchema, banSchema };
// Exports