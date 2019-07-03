const logs = console.log;
class C {
    consoles(...S) {
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
}
var conso = new C();
var cons = conso.consoles;
module.exports = cons;