"use strict";
//IIFE - Immediately Invoked Function Expressions
//AKA - Anonymous Self-Executing Function

(function(){

    function DisplayHomePage(){
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
        });
    }
    function DisplayProductPage(){

    }
    function DisplayServicesPage(){

    }
    function DisplayAboutUsPage(){

    }
    function DisplayContactPage(){

    }
    function Start(){
        console.log("App Started!")
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }
    window.addEventListener("load", Start)
})();