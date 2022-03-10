const inquire_apply_btn = document.querySelector(".function-ia");
const paydepowith_btn = document.querySelector(".function-pwd");
const function_btn_container = document.querySelector(".function-btn-container");
const submitREF = document.querySelector("#reference-number-submit");
const inputREF = document.querySelector("#reference-number-input");
const functionHeader = document.querySelector(".function-header");

const webapp_container = document.querySelector(".WebApp-container");
const body = document.querySelector("body");

const loader = document.createElement("div");

function jumpto(URL){
  
    function directing(){

        window.location.href = URL;
    }
    setTimeout(directing, 3000);

}

function loaderMaker(){

    const div_1stwave = document.createElement("div");
    const div_2ndwave = document.createElement("div");

    const div_loadingTextContainer = document.createElement("div");
    const div_loadingTextContent = document.createElement("p");

    webapp_container.appendChild(div_loadingTextContainer);
    div_loadingTextContainer.classList.add("loadingText");
    div_loadingTextContainer.append(div_loadingTextContent);
    div_loadingTextContent.innerText = "Please Wait...";

    loader.classList.add("lds-ripple");

    webapp_container.appendChild(loader);
    function_btn_container.style.display = "none";
    functionHeader.remove();
    for(let i = 0 ; i < 2; i++ )
     loader.appendChild(div_1stwave);
     loader.appendChild(div_2ndwave);   
}



submitREF.addEventListener("click", ()=>{

    
    loaderMaker();
})

inquire_apply_btn.addEventListener("click", ()=>{

   
 
   loaderMaker();
   

   
})