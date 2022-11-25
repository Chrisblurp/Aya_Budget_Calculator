// let income = document.getElementById("income").value;
// let age = document.getElementById("age").value;

const calculateBudget = (e) => {
   
    
    // first get the value of the income and age of the user
// let income = document.forms['calculate-budgetform']['income'].value;
let age = document.forms['calculate-budgetform']['age'].value;

if(age > 16 ) {
    document.loginForm.action = "budget.html";

    alert("you are too young to have an income");

}
else{
    
    return false;
}
}