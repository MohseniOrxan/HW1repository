/*
    CSCI 2408 Computer Graphics Fall 2022 
    (c)2022 by Name Surname 
    Submitted in partial fulfillment of the requirements of the course.
*/
var canvas;
var context;
window.onload = init;

function init() {
    // Get reference to the 2D context of the canvas
    canvas = document.getElementById("gl-canvas");
    context = canvas.getContext("2d");
}