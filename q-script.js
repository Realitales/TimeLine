const user_func_nowserving = document.querySelector(".queue-currentNumber-header");
const user_func_yournumber = document.querySelector(".user-number-header");

const user_approxTime = document.querySelector(".queue-userNumber-ApproxText")
const user_usernumber = document.querySelector("#user-number");
const user_subcateg = document.querySelector(".subcateg");

const queue_Currentcontainer = document.querySelector(".queue-currentNumber");


let user_state = true;

const current_serving_container = document.createElement("div");
const current_serving_contentMainP = document.createElement("p");



user_func_nowserving.addEventListener("click", ()=>{


    user_func_yournumber.classList.add("inactive-userState")
    user_func_nowserving.classList.add("active-userState");
    user_approxTime.style.display = "none";
    user_usernumber.style.display = "none";
    user_subcateg.style.display = "none";
    
    queue_Currentcontainer.appendChild(current_serving_container);
    
    current_serving_container.classList.add("active-serving-container");
    current_serving_contentMainP.classList.add("active-serving-text");
    
    current_serving_contentMainP.innerText="#14";
    current_serving_container.appendChild(current_serving_contentMainP);
    user_state = false;

    current_serving_container.style.display = "block"
})

user_func_yournumber.addEventListener("click", ()=> {

    user_func_yournumber.classList.remove("inactive-userState")
    user_func_nowserving.classList.remove("active-userState");
    user_state = true;
    user_approxTime.style.display = "block";
    user_usernumber.style.display = "block";
    user_subcateg.style.display = "block";
    current_serving_container.style.display = "none"
})