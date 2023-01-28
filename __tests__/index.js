const { underline, bgGreen, bgRed } = require(`ansi-colors`);
// Import

module.exports = {
    connection: underline(`MongoDB Connection`),
    listen: underline(`Server Listen`),
    login: underline(`Bot Login`),
    status: [ bgGreen(`Passing`), bgRed(`Failing`) ]
};
// Export