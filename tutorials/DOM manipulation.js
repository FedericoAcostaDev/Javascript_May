//Dom selectors

1- document.getElementsByTagName('h1');
2- document.getElementsByClassName ('theclass')[0]; //[0] if i want to select a particular index
3- document.getElementsById ('theid');

1- document.querySelector('h1') //we can select anything here,works with css
2- document.querySelectorAll('h1')

//atributes
1- document.getAtribute
//firts we need to select the object
document.querySelector('li');
// but we have to store it so we need to give it to a variable
var entireList = document.querySelector('li');

2- document.setAtribute('entireList');

##Changing Style

document.querySelector('entireList' or 'h1' ).Style.background = 'yellow'; //but idealy we want ''separation of concerns'' so better if we can do it in css or html.
//in that case assuming we want to change h1 style we made a variable and then select the variable to have an css style
var firtTitle = document.querySelector('h1');
//select variable to have CSS style class .coolTitle
firtsTitle.className('coolTitle') 

##Parents & childs

1- parentElement
2- children 
//exmaple
document.querySelectorAll('li'); //we have an aray of indexes so we need to loop after 
document.querySelectorAll('li')[2]; //we have selected the index 2 of 'li' 
document.querySelectorAll('li')[2].parentElement; //we selected the parent of index 2

//example children
document.querySelector('ul').children; //we selected the children of ul (all li) 
//by selecting children we recieve an array, so we need to loop through the array


