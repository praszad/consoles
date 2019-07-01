const C = function(...S) {
    let len = S.length;
    if (len <= 1) {
        return console.log(S[0]);
    }
    if (len >= 1) {
        var v = [];
        for (i = 0; i < len; i++) {
            v.push(S[i])
        }
        return console.log(v);
    }
}
const c = C;
const consoles = C;

const T = function(...S) {
    let len = S.length;
    if (len <= 1) {
        return console.log(typeof S[0]);
    }
    if (len >= 1) {
        var v = [];
        for (i = 0; i < len; i++) {
            v.push(typeof S[i])
        }
        return console.log(v);
    }
}
const t = T;
const types = T;
const type = T;
module.exports = { C, c, consoles, t, type, types, T };