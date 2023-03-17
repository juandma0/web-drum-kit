
let drumButtonNumber = document.querySelectorAll(".drum").length;
let drumButton = document.querySelectorAll(".drum");

let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
let kick = new Audio("sounds/kick-bass.mp3");
let crash = new Audio("sounds/crash.mp3");
let snare = new Audio("sounds/snare.mp3");

//for (let i = 0; i < drumButton.length; i++) {
//    drumButton[i].addEventListener("click", () => {           // This doesn't work because arorw functions don't have a `this` context.
//        console.log(this.textContent);
//    })
//}

function handleSound(key) { // Better to create a function for the switch than to summon the switch every time it is used
    switch (key) {
        case "w":
            tom1.play();
            break;

        case "a":
            tom2.play();
            break;

        case "s":
            tom3.play();
            break;

        case "d":
            tom4.play();
            break;

        case "j":
            snare.play();
            break;

        case "k":
            crash.play();
            break;

        case "l":
            kick.play();
            break;


        default: console.log("No audio file to play");
    }
}

for (let i = 0; i < drumButton.length; i++) {
    drumButton[i].addEventListener("click", function(event){
        handleSound(event.target.textContent);
    }) // `event` returns the event (I suppose), which in this case may be the "click"
}

document.addEventListener("keydown", function (event) { // handleSound can't be called as the function to execute after the event since handleSound has to recieve an event, and that event can only be called with a callback function `function(){}`
    handleSound(event.key); // `event.key` works because it returns the pressed key, `event.target` returns the body, different from the click, which only returns the clicked item, `event.target` will return the body when a key is pressed and the document is given for the event listener
}) 



//for (let i = 0; i < drumButtonNumber; i++) {
//    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//        console.log(this.textContent);
//    })
//}
//
//drumButton.forEach(addEventListener("click", function() {         // This doesn't work because forEach doesn't and `addEventListener` can't be used at the same time
//    console.log(this.textContent);                                // since `addEventListener` is to go on the element that's provided individually. This is why
//}))                                                               // `for` loops do work.



//function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
//    this.yearsOfExperience = yearsOfExperience;
//    this.name = name;
//    this.cleaningRepertoire = cleaningRepertoire;
//    this.clean = function () {
//        alert("Cleaning in progress!")
//    }
//}
//
//let houseKeeper1 = new HouseKeeper(5, Janine, [Bathroom, livingroom, yard]);