const chalk = await import(`chalk`);
// Import

module.exports = {
    connection: chalk.underline("MongoDB Connection"),
    listen: chalk.underline("Server Listen"),
    login: chalk.underline("Bot Login"),
    status: [ chalk.bgGreen("Passing"), chalk.bgRed("Failing") ]
};
// Export