

let getInput = document.querySelector(".desktop-mail");
let mailError = document.querySelector(".empty-p")
let getValue;
function action(){
    document.querySelector(".input-btn").addEventListener("click", function(){
       getValue = getInput.value;
      if(!getValue.includes(".com")){
        mailError.innerHTML = "Email Error, mail must include .com";
    }else{
        mailError.innerHTML = "";
        console.log(getValue);
    }
    })
}

 
action();

let userInput = document.querySelector(".mail");
let emailError = document.querySelector(".empty-tag")
let userValue;
function mobileAction(){
    document.querySelector(".inputarea-btn").addEventListener("click", function(){
       userValue = userInput.value;
      if(!userValue.includes(".com")){
        emailError.innerHTML = "Email Error, mail must include .com";
    }else{
        emailError.innerHTML = "";
    }
    })
}
mobileAction();


function burgerbtn(){
    let navIcon = document.querySelector(".hamburgerNav");
    if (navIcon.style.display == "block"){
        navIcon.style.display = "none";
    } else{
        navIcon.style.display = "block";
    }
}

function arrowone(){
    let arrow1 = document.querySelector(".answer1");
    if (arrow1.style.display == "block"){
        arrow1.style.display = "none";
    }else{
        arrow1.style.display = "block";
    }
}

function arrowtwo(){
    let arrow2 = document.querySelector(".answer2");
    if (arrow2.style.display == "block"){
        arrow2.style.display = "none";
    }else{
        arrow2.style.display = "block";
    }
}

function arrowthree(){
    let arrow3 = document.querySelector(".answer3");
    if (arrow3.style.display == "block"){
        arrow3.style.display = "none";
    }else{
        arrow3.style.display = "block";
    }
}

function arrowfour(){
    let arrow4 = document.querySelector(".answer4");
    if (arrow4.style.display == "block"){
        arrow4.style.display = "none";
    }else{
        arrow4.style.display = "block";
    }
}
