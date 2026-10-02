let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let newArr = [...arr1, ...arr2];
console.log(newArr); // [1, 2, 3, 4, 5]

let obj1 = { product: "mouse", price: 27000 };
let obj2 = { spec: "M200 mose gray" };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3); 