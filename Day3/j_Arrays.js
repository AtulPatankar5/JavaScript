let arr=[23,13,543,7,8,34,"kauhediuea","a"];
console.log(arr)// typeof object 
console.log(arr.toString())//typeof  string
console.log(arr.join("_"))//typeof string

let v=arr.pop();
console.log(v,arr)
arr.push(900);
console.log(arr);

let first=arr.shift();
console.log(arr, first)
let addfirst=arr.unshift(54);// return length of arr length 
console.log(arr,addfirst)


delete arr[0];
console.log(arr);
console.log(arr.length);


let arr1=[3,4,6,7,8,2];
let arr2=[346,344,676,723,823,532];
let arr3=[1,1,1,1,1,1];
let arr4=arr1.concat(arr2,arr3);
console.log(arr4);
console.log(arr3);
console.log(arr2);
console.log(arr1);

//sort based on alphabatical order
arr4.sort();
console.log("Sorted="+arr4);

//Decreasing order
let num=[555,21,7,3,4,9,6,1,10];
let compare=(a,b)=>{
    return b-a
}
num.sort(compare);
console.log(num);

//Reverse
num.reverse();
console.log(num)

let laptop=[1,2,3,4,5,6,7];
let retunedvalue=laptop.splice(2,3,1000,2000,3000,4000);
console.log("deleted value="+retunedvalue)
console.log("Spliced values="+laptop)

let num3=[1,2,3,4,5,6,7]
console.log(num3.slice(2,5));