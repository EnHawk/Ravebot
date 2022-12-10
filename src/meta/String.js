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
// Definitions

module.exports = { str, strUnique, strRequired, strUniqueRequired };
// Exports