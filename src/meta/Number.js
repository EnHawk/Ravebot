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

module.exports = { number, numberUnique, numberRequired, numberUniqueRequired };
// Exports