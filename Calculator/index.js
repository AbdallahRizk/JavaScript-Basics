/* The functionality to programme:

1- Every Button you press has to be typed in the textfield 
except "Equal, Delete, CLear"
2-BY pressing Equal show the result or an error massage
3- By pressing Delete delete only one item 
4- By pressing clear delete everything on the textField
5- As long as there is no error just keep showing the result and keep calculating the result

*/
var textfield = " ";

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


document.getElementById('clear').addEventListener("click", function () {
    document.getElementById('result').value = " ";
    textfield = " ";
});


// add all the numbers on an array of numbers with split tokens and add the tokens on another array (+,-,*,/) 
// then loop over all the array and math the first two items of the array with the first tokesn on the tokesn array
// then keep doint the math with the result with the next array item until you loop over all the array
// in case there is unfamiliarity with the buttons fire try and catch with an error massage
// in the end keep the result on the textbox to be ready for other math opperations

//so to staff to know first:
//how to create an array
//how to read unitl specific token and split
//how to keep the token in another array
//how to fire try and catch once need it

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

document.getElementById('equal').addEventListener("click", function () {

    var numbers = textfield.split(/\D/g);
    var operations = textfield.split(/\d/g).filter(Boolean);

    /*
    console.log(textfield);
    console.log(numbers);
    console.log(operations);
    */
   
if(isNaN(result(numbers, operations)) == false){
    textfield =result(numbers, operations);
   }else{
       textfield = "Invalid expression"
   }
   document.getElementById('result').value = textfield;


});