const moment = require("moment");
const chalk = require("chalk");
const clk = new chalk.constructor({ enabled: true });

exports.run = (client, CloseEvent) => {
    console.log(`${clk.bgBlue(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`)} Connected`);
};