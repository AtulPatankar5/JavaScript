let insect="Caterpillar is a insect where it is it.";
console.log(insect.includes("it"));
console.log(insect.startsWith("Caterpillar"));
console.log(insect.endsWith("it."))

let sentence="the amount is Rs 10000";
let index="the amount is Rs ".length;
let val=Number.parseInt(sentence.slice(index));
console.log(typeof val +val );