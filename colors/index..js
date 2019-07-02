const chalk = require('chalk');
const logs = console.log;
class Colors {
    blue(D) {
        return logs(chalk.blue(D));
    }
}
log = new Colors();
module.exports = log;