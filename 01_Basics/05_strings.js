const name= "pratham";
const repoCount= 20;

// console.log(name+repoCount+ " Github");
console.log(`My name is ${name}, My Repo Count is ${repoCount}`);

const gameName= new String('pratham-pt-com');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString= gameName.substring(0, 4);
console.log(newString);

const anotherString= gameName.slice(-14);
console.log(anotherString);

const newStringOne= "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://pratham.com/pratham%20tetgure";
console.log(url.replace('%20', '-'));

console.log(url.includes('tetgure'));
console.log(gameName.split('-'));