const logs = console.log;
class ToUp {
    touper(...S) {
        let len = S.length;
        if (len <= 1) {
            return logs((S[0]).toUpperCase());
        } else if (len >= 1) {
            var v = [];
            for (i = 0; i < len; i++) {
                if (typeof S[i] == "string") {
                    v.push((S[i]).toUpperCase())
                } else {
                    v.push(S[i])
                }
            }
            return logs(v);
        }
    }
}
var toup = new ToUp();
var tou = toup.touper;
module.exports = tou;