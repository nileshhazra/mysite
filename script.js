var database = [
    {
        username: "Nilesh",
        password: "123456"
    },
    {
        username: "Sampriti",
        password: "123456"
    },
    {
        username: "Shirley",
        password: "123456"
    },
    {
        username: "Shreya",
        password: "123456"
    },
];

var newsFeed = [
    {
        username:"Jyoti",
        timeline:"I am an educator at Unacademy"
    },
    {
        username: "Rishita",
        timeline: "I love dogs."
    }
];

function isUsernameValid(user,pass) {
    for (let i = 0; i < database.length; i++) {
        if(database[i].username === user &&
            database[i].password === pass){
                return true;
            }
        
    }
    return false;
    
}


function signIn(user,pass) {
   if(isUsernameValid(user,pass)){
   console.log(newsFeed);
   }else{
    alert("Sorry, Record not found!");
   }     
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Enter Password");
signIn(userNamePrompt,passwordPrompt);
