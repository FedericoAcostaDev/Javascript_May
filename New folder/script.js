var database = [
  {
    username: "fede",
    password: '123',
  },
  {
    username: "martin",
    password: '456',
  },
  {
    username: "xime",
    password: 'supersecret',
  },
];
var newsFeed = [
  {
    username: 'bobby',
    timeline: 'tu gobierno'
  },
  {
    username: 'sally',
    timeline: 'yoo, im new'
  }
];


function isUserValid ( user, pass){
for (var i=0; i <database.length; i++){
  if(database[i].username === user && 
    database[i].password === pass){
     return true;
    } 
    }
    return false
}

function signIn(user, pass){
  console.log(isUserValid(user, pass));
if (user === database[0].username && pass === database[0].password) {
  console.log(newsFeed);
} else {
    alert('sorry, incorrect password');
  } 
}
var usernamePrompt = prompt('put your username');
var passwordPrompt = prompt('put your password');
signIn(usernamePrompt, passwordPrompt);