const id = {
    type: String,
    unique: true,
    required: true
};

const number = {
    type: Number,
    default: 0
};
// Definitions

module.exports = { id, number };
// Exports