const { underline, green, red } = require(`ansi-colors`);
// Import

module.exports = {
    connection: underline(`MongoDB Connection`),
    listen: underline(`Server Listen`),
    login: underline(`Bot Login`),
    status: [ green(`Passing`), red(`Failing`) ]
};
// Export