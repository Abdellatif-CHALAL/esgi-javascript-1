function ucfirst(str) {
   if (typeof str !== "string" || str === "") return "";
   
   return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
   var words = str.toLowerCase().split(' ');

   for (var i = 0; i < words.length; i++) {
      words[i] = ucfirst(words[i]);
   }

   return words.join(' ');
}

function pascalCase(str) {
   if (typeof str !== "string" || str === "") return "";

   var words = str.toLowerCase().split(' ');

   for (var i = 0; i < str.length; i++) {
      words[i] = ucfirst(words[i]);
   }

   return words.join('');
}

function snake_case(str) {
   if (typeof str !== "string" || str === "") return "";

   var words = str.toLowerCase().split(' ');

   return words.join('_');
}

function leet(str) {
   if (typeof str !== "string" || str === "") return "";

   const alphabetList = {
      'a': '4',
      'b': '8',
      'e': '3',
      'g': '6', // or 9
      'i': '1', // or |
      'o': '0',
      's': '5',
      't': '7',
      'u': '(_)'
   }

   for (var i = 0; i < str.length; i++) {
      var alphabet;
      var letter = str[i].toLowerCase();

      alphabet = alphabetList[letter]

      if (alphabet) {
         str = str.replace(str[i], alphabet)
      }
   }

   return str;
}

function verlan(str) {
   if (typeof str !== "string" || str === "") return "";

   str = str.split(' ');

   for (var i = 0; i < str.length; i++) {
      str[i] = str[i].split('').reverse().join('');
   }

   return str.join(' ');
}

function yoda(str) {
   if (typeof str !== "string" || str === "") return "";

   return str.split(' ').reverse().join(' ');
}

function vig(msg, key) {
   if (typeof msg !== "string" || msg === "") return "";
   if (typeof key !== "string" || key === "") return "";


   return str.split(' ').reverse().join(' ');
}

const prairie = {
   animal : {
      type : {
         name : 'chien'
      }
   }
}

function prop_access(obj, path) {
   if (path === '' || path === null) {
      return obj;
   }

   var arrayProps = path.split('.');
   var tmp = [];

   for (var i = 0; i < arrayProps.length; i++) {
      obj = obj[arrayProps[i]];
      tmp[i] = arrayProps[i];

      if(obj === undefined) {
         console.log(tmp.join('.') + ' not exist');
         return "";
      } 
   }

   return obj;
}

console.log(prop_access(prairie, 'animal.type.name'));

/* console.log(ucfirst('rahim'));
console.log(capitalize('Bonjour abdoul rahim'));
console.log(pascalCase('abdoul rahim'));
console.log(snake_case('abdoul Rahim Bah'));
console.log(leet('Rahim')); 
console.log(verlan('Abdoul Rahim'));
console.log(yoda('Abdoul Rahim')); */


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
