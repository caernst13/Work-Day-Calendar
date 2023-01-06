var hour1 = document.getElementById("nine")
var hour2 = document.getElementById("ten")
var hour3 = document.getElementById("eleven")
var hour4 = document.getElementById("noon")
var hour5 = document.getElementById("one")
var hour6 = document.getElementById("two")
var hour7 = document.getElementById("three")
var hour8 = document.getElementById("four")
var hour9 = document.getElementById("five")

var today=moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

var hour = moment().hours();
console.log(hour)




