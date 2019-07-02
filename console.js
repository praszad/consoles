const logs = console.log;
const chalk = require('chalk');

const C = function(...S) {
    let len = S.length;
    if (len <= 1) {
        return logs(S[0]);
    }
    if (len >= 1) {
        var v = [];
        for (i = 0; i < len; i++) {
            v.push(S[i])
        }
        return logs(v);
    }
}
module.exports = C;