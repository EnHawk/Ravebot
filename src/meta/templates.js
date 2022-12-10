const { strUniqueRequired } = require(`./String`);
const { mongoose } = require(`../index`);
// Imports

const userId = strUniqueRequired;
const Schema = mongoose.Schema;
const Model = mongoose.model;

module.exports = { userId, Schema, Model };
// Exports