//This field to control the textfield in the html
var textfield = " ";

//this function to copy every value in the textfield
function retunNumber(val) {
    console.log(val);
    if (textfield != " ") {
        textfield = textfield + val;
        document.getElementById('result').value = textfield;
    } else {
        textfield == " "
        textfield = val;
        document.getElementById('result').value = textfield;
    }
}

//this function to clear the textfield
document.getElementById('clear').addEventListener("click", function () {
    textfield = " ";
    document.getElementById('result').value = textfield;
});

// This function to do the needed calculation 
function result(numbers, operations) {

    var currentResult = Number(numbers[0]);
    for (var i = 0; i < operations.length; i++) {
        if (operations[i] == '+') {
            currentResult = currentResult + Number(numbers[i + 1]);
        } else if (operations[i] == '-') {
            currentResult = currentResult - Number(numbers[i + 1]);
        } else if (operations[i] == '*') {
            currentResult = currentResult * Number(numbers[i + 1]);
        } else if (operations[i] == '/') {
            currentResult = currentResult / Number(numbers[i + 1]);
        } else {
            currentResult = "Wrong";
        }
    }
    return currentResult;
}

//This function to call the calculation part and return the result
document.getElementById('equal').addEventListener("click", function () {

    //This part to separate the numbers with the operations and store them in an array
    var numbers = textfield.split(/\D/g);
    var operations = textfield.split(/\d/g).filter(Boolean);

   //This is the return value form the the result function 
  var returnResult = result(numbers, operations); 

  //this to check if the given value is vaild or no
if(isNaN(returnResult) == false){
    textfield =returnResult;
   }else{
       textfield = "Invalid expression"
   }
   document.getElementById('result').value = textfield;


});

//This function to delete the last char 
document.getElementById('delete').addEventListener("click", function(){

    //This to convert the result form number to string
    var textfieldToString = textfield.toString();
    //This one to delete the last char
    var deleteLastChar= textfieldToString.substr(0, textfieldToString.length-1);
    //This one to give textfield the last value
    textfield = deleteLastChar;

    document.getElementById('result').value= textfield;
}); 

