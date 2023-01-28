import chalk from "chalk";
// Import

export const connection = chalk.underline(`MongoDB Connection`);
export const listen = chalk.underline(`Server Listen`);
export const login = chalk.underline(`Bot Login`);
export const status = [ chalk.bgGreen(`Passing`), chalk.bgRed(`Failing`) ];