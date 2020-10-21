function ucfirst(chaine) {​​​​​
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}​​​​​


function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    
}
function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

    return chaine
        .split(" ")
        .map(word => ucfirst(word.toLowerCase()))
        .join(" ");
}

console.log(capitalize("bonjour LA FraNce"));