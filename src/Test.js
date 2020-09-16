//rest and spread



function showName(firstName, lastName, ...titles) {//Rest parameter
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  
  //function can be called with any number of arguments, no matter how it is defined.There will be no error because of “excessive” arguments. The rest parameters gather all remaining arguments.The ...rest must always be last.

  showName("Julius", "Caesar", "Consul", "Imperator");

  let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 spread turns array into a list of arguments. It remove the square brackets from the array so we can directly access the elemnts of the array

//async await

// async await is an alternative for promise and much easier to use than promise, async can be placed before a function The word “async” before a function means one simple thing: a function always returns a promise.
//The keyword await makes JavaScript wait until that promise settles and returns its result.
function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
  }

  //map()
//The map() method creates a new array with the results of calling a function for every array element.
  var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

document.getElementById("demo").innerHTML = newarray;

//reduce
//The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array 
var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}
function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
}

//filter
//The filter() method creates an array filled with all array elements that pass a test

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

//foreach

//The forEach() method calls a function once for each element in an array, in order.
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

//pop
//pop() removes the last element from the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); 

//push
// push inserts an element in last index of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); 

//shift
// shift() removes the first elemnt from the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits

//unshift
// unshift() adds an element to the first index of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5

//splice

//The splice() method adds/removes items to/from an array, and returns the removed item(s).

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//slice
///The slice() method returns the selected elements in an array, as a new array object.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

//preventdefault

//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
<a id="myAnchor" href="https://w3schools.com/">Go to W3Schools.com</a>
document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
  });

//stoppropogation

//The stopPropagation() method prevents propagation of the same event from being called.
function func1(event) {
    alert("DIV 1");
    if (document.getElementById("check").checked) {
      event.stopPropagation();
    }
  }