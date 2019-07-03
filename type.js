const logs = console.log;
class T {
    type(...S) {
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
}
var t = new T();
var ty = t.type
module.exports = ty;