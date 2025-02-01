/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {

    


    let regex = new RegExp(p.replace('*', '.*'));


    return regex.test(s);
}


    