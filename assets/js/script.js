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


// form5.placeholder='testing'
var blocks = [hour0, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8];
var tasks = [form0, form1, form2, form3, form4, form5, form6, form7, form8];

var today=moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

// var time = moment().hours() - 9;
// console.log(time)
var time = 5;
for (let i = 0; i<9; i++) {
    if (time > i) {
        blocks[i].classList.add("past")
    } else if (time === i) {
        blocks[i].classList.add("present")
    } else {
        blocks[i].classList.add("future")
    }
}

// for (let k = 0; k<9; k++) {
//     blocks[k].addEventListener('submit', console.log('test'))
// }


form0.addEventListener('click', console.log("what"))
