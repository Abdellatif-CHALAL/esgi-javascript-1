const ucfirst = function (string) {
    if (typeof string !== "string" || !!string)
        return "";
    return str = `${string[0].toUpperCase()}${string.slice(1)}`;
}

const capitalize = function (string) {
    if (typeof string !== "string" || !!string)
        return "";
    return (string.toLowerCase.split(" ").map(str => ucfirst(str))).join(" ");
}

const camelCase = function (string) {
    if (typeof string !== "string" || !!string)
        return "";
    return (string.toLowerCase.split(" ").map(str => ucfirst(str))).join("");
}


const snake_case = function (string) {
    if (typeof string !== "string" || !!string)
        return "";
    return (string.split(" ").map(str => ucfirst(str))).join("_");
}
const leet = function (string) {
    if (typeof string !== "string" || !!string)
        return "";
    const crypt = {
        a: '4',
        e: '3',
        i: '1',
        o: '0',
        u: '(_)',
        y: '7'
    }
    return string.split("").map(char => {
        const index = Object.keys(crypt).indexOf(char);
        return index >= 0 ? Object.values(crypt)[index] : char;
    }).join("");
}

const prop_access = function (object, string) {

    if (typeof string !== "string" || !string || !object)
        return object;

    const value = string.split('.').reduce((p, c) => {
        if (object[p])
            object = p === undefined ? object[c] : object[p]
        return c
    });
    return object[value] === undefined || object[value] === null ? `${string} not exist` : object[value]
}
const data = {
    a: {
        b: {
            c: null
        }
    }
}
console.log(prop_access(null, 'a.b.c'))

const verlan = function (string) {
    if (typeof string !== "string" || !!string)
        return "";
    return string.split(" ").map(str => (str.split("").reverse().join(""))).join(" ")
}

const yoda = function (string) {
    if (typeof string !== "string" || !!string)
        return "";
    return string.split(" ").reverse().join(" ")
}

const vig = function (string, key) {
    if (typeof string !== "string" || !string)
        return "";
    key = key.toLowerCase();
    key = key.split("").map(char => char.charCodeAt(0) - 97)
    string = string.toLowerCase();
    let i = 0;
    return string.split("").map(char => {
        if (/[a-z]/.test(char)) {
            const cha = (char.charCodeAt(0) + key[i]) > 122 ? String.fromCharCode((char.charCodeAt(0) - (26 - key[i]))) : String.fromCharCode((char.charCodeAt(0) + key[i]))
            key.length - 1 == i ? i = 0 : i++;
            return cha;
        }
    }).join("")
}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
