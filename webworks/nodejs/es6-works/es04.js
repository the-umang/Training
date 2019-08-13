let nums = [10,20,30,40,50,60];
console.log(nums);

// ... is called as spread operator which is used to append the value
let nums1= [100,200,...nums];

console.log(nums1);


let nums2 = nums;
nums2.push(999);
console.log(nums2);
console.log(nums);
 //num2 is pointing to the num ,  same memory is used 
// output - [ 10, 20, 30, 40, 50, 60 ]
// [ 100, 200, 10, 20, 30, 40, 50, 60 ]
// [ 10, 20, 30, 40, 50, 60, 999 ]
// [ 10, 20, 30, 40, 50, 60, 999 ]

let p1 ={name:"Harish" , email:"harish@gmail.com"};
console.log(p1);

let p2 = { city : "Bangalore" , ...p1,country : "India"};
console.log(p2);

// this is going to make a new copy of the p1
let p3 = {...p1};

console.log(p3);

console.log(p1===p3);






