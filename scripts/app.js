"use strict";
/**
 * Name: Josh Frederick
 * Date: January, 10 2023
 * File Name: app.js
 * File Description: JavaScript file that holds functions
 */
//IIFE - Immediately Invoked Function Expressions
//AKA - Anonymous Self-Executing Function

(function(){

    function DisplayHomePage(){
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
        });
    }
    // ICE1
    // Steps 3 and 4 - Creating variables equal to the first tag name "main"'s value and a paragraph tag
    let MainContent = document.getElementsByTagName("main")[0];
    let MainParagraph = document.createElement("p")
    // Setting up for step 8
    let DocumentBody = document.body;

    // Step 5 - Assign an id and class to the main paragraph variable created above along with text for it
    MainParagraph.setAttribute("id", "MainParagraph")
    MainParagraph.setAttribute("class", "mt-3")
    MainParagraph.textContent = "This is the Main Paragraph!"
    // Step 6 - Append the above variable to the MainContent variable created above
    MainContent.appendChild(MainParagraph);
    // Step 7 - Using template strings to concatenate two strings and display them as one line
    let FirstString = "This is";
    let SecondString = `${FirstString} the Main Paragraph.`;
    MainParagraph.textContent = SecondString;

    // Step 8 - Using template strings to create an HTML article  and show it on the document body
    let Article = document.createElement("article");
    let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> This is my article paragraph</p>`;
    Article.setAttribute("class", "container")
    Article.innerHTML = ArticleParagraph;
    DocumentBody.appendChild(Article);

    function DisplayProductPage(){

    }
    function DisplayServicesPage(){

    }
    function DisplayAboutUsPage(){

    }
    function DisplayContactPage(){

    }
    // Start function to call the methods listed above in a switch case on start up
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