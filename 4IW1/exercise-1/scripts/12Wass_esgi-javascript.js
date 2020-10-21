function ucfirst(string) {
    if (typeof string !== "string" || string === "") return ""; 
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

function capitalize(string){
    if (typeof string !== "string" || string === "") return ""; 
    const splitString = string.toLowerCase().split(' '); 
    for (let i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1); 
    }
    return splitString.join(' '); 
}

function camelCase(string){
    if (typeof string !== "string" || string === "") return ""; 
    string = capitalize(string);
    const spacedString = string.split(' '); 
    return spacedString.join(''); 
}

function snake_case(string){
    if (typeof string !== "string" || string === "") return ""; 
    string = string.toLowerCase(); 
    spacedString = string.split(' ');
    return spacedString.join('_'); 
}

function leet(string){
}

// leet('Cbueiaze ezabeia e zae iuzae zae azu ');

console.log(camelCase("toggle case is the coolest")); 

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
