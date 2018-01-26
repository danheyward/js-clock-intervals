
"use strict";

var secondHand; // Stores "second" id
var minuteHand; // Stores "minute" id
var hourHand; // Stores "hour" id
var hourCorrect; // Stores getHours for military time changes
var rightTime; // Stores function to add / update style.transform for id's
var now; // Stores new Date() function

// Select and store the hand Id
rightTime = function(time) {
  secondHand = document.getElementById("second");
  minuteHand = document.getElementById("minute");
  hourHand = document.getElementById("hour");
// Sets up variable to turn military time to regular time
  hourCorrect = now.getHours()

// Corrects issues with now Date() military time
  if (hourCorrect > 12) {
    hourCorrect - 12;
  } else {
    hourCorrect;
  }

// Creates / updates the style.transform attribute to rotate with each function return
  secondHand.style.transform = "rotate(" + now.getSeconds() * 6 + "deg)";
  minuteHand.style.transform = "rotate(" + (now.getMinutes() * 6 + now.getSeconds() * 0.1) + "deg)";
  hourHand.style.transform = "rotate(" + (hourCorrect * 30 + now.getMinutes() / 2) + "deg)";
};

// Fires once the page loads to pull new Date initially
setTimeout(function() {
  now = new Date();
  rightTime(now);
}, '');

// Calls new Date () and runs the function rightTime every second
setInterval(function() {
  now = new Date();
  rightTime(now);
}, 1000);
