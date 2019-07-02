const logs = console.log;
const chalk = require('chalk');

const T = function(...S) {
    let len = S.length;
    if (len <= 1) {
        return logs(typeof S[0]);
    }
    if (len >= 1) {
        var v = [];
        for (i = 0; i < len; i++) {
            v.push(typeof S[i])
        }
        return logs(v);
    }
}

module.exports = T;