function legalAge(age){
    if (age >= 18){
        console.log("You are an adult");
    } else {
        console.log("You are not an adult");
    }
}
legalAge(69);

function computer(grade){
    if (grade >= 94.5){
        console.log("1");
    }else if (grade >= 91.5){
        console.log("1.25");
    }else if (grade >= 89.5){
        console.log("1.5");
    }else if (grade >= 86.5){
        console.log("1.75");
    }else if (grade >= 84.5){
        console.log("2");
    }else{
        console.log("Not within the transmutation ");
    }
}
//computerGrade(87);

function login(username, password){
    if (username === "cliffy" ){
        if (password === "12345"){
            console.log("Wellcome User");
        }else{
            console.log("Invalid Username or Password");
        }
    }
}
login("cliffy", "12345");
function ticketPrice(age){
   if (age < 18){ 
    if (age < 5){
        console.log("Ticket: free");
    }else{
        console.log("Ticket: Child Price");
    }
   }else{
    if (age >= 60){
        console.log("Ticket: Senior Price");
    }else{
        console.log("Ticket: Adult Price");
    }
   }
}
ticketPrice(70);
