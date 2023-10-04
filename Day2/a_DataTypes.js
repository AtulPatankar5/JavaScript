//nn bb ss u
// null number boolean bigint string symbol undefined --> Primitive datatypes

let a = null;
let b = 23;
let c = true;
let d = BigInt(23) + BigInt(3);
let e = "String";
let f = Symbol("I am symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof d)


//Objects
const item = {
    "harry": true,
    "Shubh": false,
    "Lavish": 123
}
console.log(item["harry"]);