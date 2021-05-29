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
