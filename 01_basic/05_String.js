const name = "Rakesh"

const repoCount = 70

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('rakesh-Sol-pure')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log((gameName.indexOf('t')));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "  Rakesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://rakesh.com/rakeh%20solapure"
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));


