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
    } else if (textfield == " ") {
        textfield = val;
        document.getElementById('result').value = textfield;
    }
}

document.getElementById('btn').addEventListener("click", function(){
    document.getElementById('result').value= " ";
    textfield = " ";
});