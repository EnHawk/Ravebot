const str = {
    type: String
};
const strUnique = {
    type: String,
    unique: true
};
const strRequired = {
    type: String,
    required: true
};
const strUniqueRequired = {
    type: String,
    unique: true,
    required: true
};
const number = {
    type: Number,
    default: 0
};
const numberUnique = {
    type: Number,
    unique: true
};
const numberRequired = {
    type: Number,
    required: true
};
const numberUniqueRequired = {
    type: Number,
    unique: true,
    required: true
};
// Definitions

module.exports = { str, strUnique, strRequired, strUniqueRequired, number, numberUnique, numberRequired, numberUniqueRequired };
// Exports