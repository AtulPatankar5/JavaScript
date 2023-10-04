// let a = alert("Click here");
// let b = prompt("Enter your age");
// let num = Number.parseInt(b);
// console.log(num);
// if (num > 5) {
//     alert("Valid age ");
// }

let val = prompt("Enter number");
switch (val) {
    case 1:
        console.log("first");
        break;
    case 2:
        console.log("Second");
        break;

    default:
        break;
}

console.log(val>18? "Driver": "Not drive");