const logs = console.log;
const ToLow = function(...S) {
    let len = S.length;
    if (len <= 1) {
        return logs((S[0]).toLowerCase());
    } else if (len >= 1) {
        var v = [];
        for (i = 0; i < len; i++) {
            if (typeof S[i] == "string") {
                v.push((S[i]).toLowerCase())
            } else {
                v.push(S[i])
            }
        }
        return logs(v);
    }
}
module.exports = ToLow;