//initallizing variables that interact with the wevsite
var hour0 = document.getElementById("nine");
var hour1 = document.getElementById("ten");
var hour2 = document.getElementById("eleven");
var hour3 = document.getElementById("noon");
var hour4 = document.getElementById("one");
var hour5 = document.getElementById("two");
var hour6 = document.getElementById("three");
var hour7 = document.getElementById("four");
var hour8 = document.getElementById("five");

var form0 = document.getElementById("hour0");
var form1 = document.getElementById("hour1");
var form2 = document.getElementById("hour2");
var form3 = document.getElementById("hour3");
var form4 = document.getElementById("hour4");
var form5 = document.getElementById("hour5");
var form6 = document.getElementById("hour6");
var form7 = document.getElementById("hour7");
var form8 = document.getElementById("hour8");

var button0 = document.getElementById("btn0")
var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var button5 = document.getElementById("btn5")
var button6 = document.getElementById("btn6")
var button7 = document.getElementById("btn7")
var button8 = document.getElementById("btn8")

var clearBtn = document.getElementById("clear");

//creating an array with the elements above to help streamline a little
var blocks = [hour0, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8];
var tasks = [form0, form1, form2, form3, form4, form5, form6, form7, form8];

//accessing moment and using it to display date
var today=moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

//checks waht time it is and adjusts colors of backgrounds accordingly
var time = moment().hours() - 9;
for (let i = 0; i<9; i++) {
    if (time > i) {
        blocks[i].classList.add("past")
    } else if (time === i) {
        blocks[i].classList.add("present")
    } else {
        blocks[i].classList.add("future")
    }
}

//stores tasks into local storage
var log0 = function(event) {
    event.preventDefault();
    job0=form0.value
    localStorage.setItem("task0", job0)
}
var log1 = function(event) {
    event.preventDefault();
    job1=form1.value
    localStorage.setItem("task1", job1)
}
var log2 = function(event) {
    event.preventDefault();
    job2=form2.value
    localStorage.setItem("task2", job2)
}
var log3 = function(event) {
    event.preventDefault();
    job3=form3.value
    localStorage.setItem("task3", job3)
}
var log4 = function(event) {
    event.preventDefault();
    job4=form4.value
    localStorage.setItem("task4", job4)
}
var log5 = function(event) {
    event.preventDefault();
    job5=form5.value
    localStorage.setItem("task5", job5)
}
var log6 = function(event) {
    event.preventDefault();
    job6=form6.value
    localStorage.setItem("task6", job6)
}
var log7 = function(event) {
    event.preventDefault();
    job7=form7.value
    localStorage.setItem("task7", job7)
}
var log8 = function(event) {
    event.preventDefault();
    job8=form8.value
    localStorage.setItem("task8", job8)
}

//checks if there is a task in local storage and then displays if there is
if (localStorage.getItem("task0") != null){
    form0.placeholder=localStorage.getItem("task0")    
}
if (localStorage.getItem("task1") != null){
    form1.placeholder=localStorage.getItem("task1")    
}
if (localStorage.getItem("task2") != null){
    form2.placeholder=localStorage.getItem("task2")    
}
if (localStorage.getItem("task3") != null){
    form3.placeholder=localStorage.getItem("task3")    
}
if (localStorage.getItem("task4") != null){
    form4.placeholder=localStorage.getItem("task4")    
}
if (localStorage.getItem("task5") != null){
    form5.placeholder=localStorage.getItem("task5")    
}
if (localStorage.getItem("task6") != null){
    form6.placeholder=localStorage.getItem("task6")    
}
if (localStorage.getItem("task7") != null){
    form7.placeholder=localStorage.getItem("task7")    
}
if (localStorage.getItem("task8") != null){
    form8.placeholder=localStorage.getItem("task8")    
}

//clears local storage and reloads page
var reset = function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
}

//event listners
button0.addEventListener('click', log0);
button1.addEventListener('click', log1);
button2.addEventListener('click', log2);
button3.addEventListener('click', log3);
button4.addEventListener('click', log4);
button5.addEventListener('click', log5);
button6.addEventListener('click', log6);
button7.addEventListener('click', log7);
button8.addEventListener('click', log8);

clearBtn.addEventListener('click', reset)
