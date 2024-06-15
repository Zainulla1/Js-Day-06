
//Exercise -1

//find the Difference between '==' and '===' operator's

var x = 7;
var y = 7;
console.log(x===y);//true

//Exercise -2

//find 2nd largest value in  given array [2,8,9,7]

const intArray=[2,8,9,7]
const largestValue=(arr) => {
    firstLargestValue=Math.max(...arr)
    index=arr.indexOf(firstLargestValue)
    arr.splice(index,2)
    secondLargestValue=Math.max(...arr)
    return( secondLargestValue)
}
console.log(largestValue(intArray));//8

//Exercise -3

//Difference between Filter and Find method

const empArr = [
    { name: "king", age: 42 },
    { name: "ali", age: 32 }, 
    { name: "john", age: 22 }, 
    { name: "mathew", age: 62 },
    { name: "zain", age: 52 },
    { name: "chintu", age: 28 },
    { name: "kumar", age: 27 },
    { name: "Thushar", age: 26 },
    { name: "marry", age: 25 },
];

const filtetedItem=empArr.filter((item)=>{
    return item.age>30
})
console.log(filtetedItem);