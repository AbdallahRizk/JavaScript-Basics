// alert('file linked');

// data type
/*

var number5;
number5 = 5;
var number1 = 35;
var number2 = 40;

alert(number1+number2);

var number3 = '35';
var number4 = '40';

alert('concanate them'+number3+number4);


//Arrays
//This how to intialize an array
var colors = ['red', 'blue', 'green'];
alert(colors);
alert(colors[1]);

//This is another way to intialize the array
var colours = new Array('red', 'yellow', 'orange');
// TO add based on the index
colours[3] = 'green';

//TO add into the array
colours.push('purple');


var numbers = [1,3,2,5,'seven'];
alert(numbers[0] + numbers[2])
alert(numbers[4]);
alert(numbers.length);
alert(numbers.sort());
alert(numbers.reverse());



//for loop
for(var i=0; i < 10; i++){
    console.log(i);
}


//while loop
var i = 0;
while(i < 7){
    console.log('You are in while loop' +i);
    i++
}


var numbers = [23,43,43,23,43,2];
//To reverse the number
numbers.reverse();

//forEach loop
numbers.forEach(function(number){
 console.log('now you are in the forEach'+number);
});

//another way to display a number
for(var i = 0;i < numbers.length;i++){
    console.log(numbers[i]);
}



// '==' sign is to check the value
var i = 2;
if(i == 2){
alert('it is the if statement');
}

// '===' is to check the value and datatype
if(i === 1){
    alert('it is the same value and the same datatype');
}
else  alert('it is not the same datatype or value');


//switch statement 
var fuit = 'apple';

switch(fuit){
    case "banana":
    alert('I love banana');
    break;

    case "apple":
    alert('apple is boring');
    break;

    default:
    alert('fruite is good for health');
    break;
}



// Object Literal
var person = {
    firstName:  'Abdallah',
    lastName:  'Rizk',
    age: 26,
    children: ['Abdallah', 'Meedo', 'Abady'],
    address: {
        street: 'Bin aldin',
        CIty: 'Makkah',
        State: 'Westren Area'
    },
    fullname: function(){
        return this.firstName +" "+this.lastName;
    }

}

alert(person.fullname());



//Object Constuctor
var apple = new Object();
apple.color ='red';
apple.shape = 'round';
apple.descript = function(){
    return ('The apple color is '+this.color+' The apple shape is '+this.shape);
}

alert(apple.descript());



//Constuctor Pattern
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function(){
        return 'A '+this.name+' is the color '+this.color+' IT is '+this.shape;
    
    }
}

var apple = new Fruit('apple','red','round');
var melon = new Fruit('melon', 'yellow', 'roundy');

alert(melon.describe);

 
// Array of objects
 var users = [
     {
     name: 'Abdallah',
     age: 26
     },
     {
     name: 'RIzk',
     age: 29
     }
 ]

 alert(users[0].name +' '+users[1].name);

 
 //Events
function doClick(){
    alert('You CLicked');
}

function changeText(id){
    id.innerHTML = 'You Clicked';

    var heading = document.getElementById('heading');
    heading.innerHTML = 'You Clicked';
}



function showDate(){
var date = document.getElementById('time');
date.innerHTML = Date();
}

*/

// Event Handling
function changeBackground(x){
console.log('hellow'); 
var body = document.getElementById('body');
var head = document.getElementById('head');

body.style.backgroundColor = x.value;
head.style.backgroundColor = x.value;
}

function validateForm(){
    var firstName = document.forms["myform"]["firstName"].value;

    if(firstName == null || firstName == ""){
        alert("First Name is required")
        return false;
    }

    if(firstName.length < 3){
        alert("First Name Must be more than three characters")
        return false;
    }
}