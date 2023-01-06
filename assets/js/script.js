var hour0 = document.getElementById("nine")
var hour1 = document.getElementById("ten")
var hour2 = document.getElementById("eleven")
var hour3 = document.getElementById("noon")
var hour4 = document.getElementById("one")
var hour5 = document.getElementById("two")
var hour6 = document.getElementById("three")
var hour7 = document.getElementById("four")
var hour8 = document.getElementById("five")

var blocks = [hour0, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8];

var today=moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

// var time = moment().hours() - 9;
// console.log(time)
for (let i = 0; i<9; i++) {
    if (time > i) {
        blocks[i].classList.add("past")
    } else if (time === i) {
        blocks[i].classList.add("present")
    } else {
        blocks[i].classList.add("future")
    }
}



