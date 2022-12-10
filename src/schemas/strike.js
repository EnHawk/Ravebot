const { Schema, userId, Model } = require(`../meta/templates`);
const { number } = require(`../meta/Number`);
// Imports

const warningSchema = new Schema({ userId, warnings: number, __v: number });
const timeoutSchema = new Schema({ userId, timeouts: number, __v: number });
const kickSchema = new Schema({ userId, kicks: number, __v: number });
const banSchema = new Schema({ userId, bans: number, unbans: number, __v: number });



module.exports = { warningSchema, timeoutSchema, kickSchema, banSchema };
// Exports