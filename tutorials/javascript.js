// terminology

//function declaration
function newFunction (){

}
//function declaratio in a var / we make the fuction a variable
var newFunction = function optionalName(){

};

//expression (something thats produces a value)
1*2=1;
var a=1;
return = true;

//calling or invoking a function
alert();
newFunction( parameter1, parameter2);

//assing a variable to
var a=true;

//function vs method
function thisIsAFunction(){

}
/*access to function*/ thisIsAFunction()

//method
var obj={
  thisIsAMethod: function(){

  }
}
/*access to method*/ obj.thisIsAMethod()


//arrays

//arrays work w/ triggers,numbers,boleans
var triggers = ["tiger", "cat", "dog", "bees"]; //tiger has an index of 0, cat:index=1, dog: index=2, bees: index=3
var numbers = [1, 2, 3, 4];
var booleans = [true, false];

//we can have fuctions inside arrays too

var functionList = [
  function apple() {
    console.log("apple");
  },
];

//mixed
var mixedList = [
  "cat",
  3,
  true,
  undefined,
  function apple() {
    console.log("apples");
  },
];

//arrays inside arrays

var inseption = [["tiger", "cat", "dog", "bees"]];
console.log(inseption[0][3]); //access to an array inside of an array

//array methods
list.shift(); // move element (removes) from the list from start of the list
list.pop(); // removes element from the end of the list
list.push("elephant"); //add an element in the list
list.concat(["deer", "wolf"]); //ad array inside an array
list.sort(); //sort only the original variable (var) not the added w/ concat (because we didnt specify var function) for that we need to do:

//example of adding concat and see it on list.sort()
var triggers = ["tiger", "cat", "dog", "bees"]; //original list
var newTriggers = triggers.concat(["deer", "wolf"]); //now triggers list has 4 items, and newTrigers list has 6 items

//objects
//instead of index1,2,3  we have properties (name,age,hobby)
//variable inicial [for arrays] {for objects}
var user = {
  name: "john",
  age: 34,
  hobby: "soccer",
  isMarried: "false",
}; //putting in console user.name the result is 'john'
user.favoriteFood = "burger"; //add a new property
user.isMarried = "true"; //change an existing property

var user = {
  name: "john",
  age: 34,
  hobby: "soccer",
  isMarried: "false",
  spells: ["abracadabra", "peeckaboo", "trick"], //put an array inside a prop
};
/*colsole
user.spells[1]
"peeckaboo"
list[1].username
"jojo"*/

//put objects inside an array inside of variable
var list = [
  { username: "john", age: 18 },
  { username: "jojo", password: 123 },
];
//function iside a object / funtions transforms into a method
var user = {
  name: "john",
  age: 34,
  hobby: "soccer",
  isMarried: "false",
  spells: ["abracadabra", "peeckaboo", "trick"], //put an array inside a prop
  shout: function () {
    console.log("ahhhh");
  },
};

//loops

var todos = ["clean room", "brush teeth", "exercise", "study", "eat healthy"];

var todosLenght = todos.length;

//for
/* for(var i=0; i<todos.length; i++);

 {console.log(todos[i] + '!'); } were are adding ! to all todos items */

/*{todos[i]=todos[i]+ '!'; } change when i write 'todos' in console*/

//while
/*  var counterOne=10;
while(counterOne > 0){
  console.log(counterOne);
  counterOne--;
} */

//do

/*var counterTwo = 10;
do {
  console.log(counterTwo);
  counterTwo--;
} 
while (counterTwo > 0) */ //we're making the same that While. the diference is in the while we have the conditions first. here first do, then read the conditions

//foreach
todos.forEach(function(todos,i){
console.log(todos, i )
})

//It can be used for call varius arrays
var todos1 = ["clean room", "brush teeth", "exercise", "study", "eat healthy"];
var todos2 = ["aaa", "bbb", "ccc", "ddd", "eee"];

function logtodos(todos,i){
  console.log (todos,i); //set function for all
}
todos1.forEach(logtodos); //calling each arrays
todos2.forEach(logtodos);
