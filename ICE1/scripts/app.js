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
        console.log("Home Page Called");
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
        console.log("Products Page Called");
    }
    function DisplayServicesPage(){
        console.log("Services Page Called");
    }
    function DisplayAboutUsPage(){
        console.log("About Us Page Called");
    }
    function DisplayContactPage(){
        console.log("Contact Us Page Called");
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(){
            if(subscribeCheckbox.checked){
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize()){
                    let key = contact.FullName.substring(0,1) + Date.now();
                    localStorage.setItem(key, contact.serialize());
                }
            }
        });

    }
    function DisplayContactListPage(){
        console.log("Contact List Page Called");

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = ""; // add deserialized data from localStorage

            let keys = Object.keys(localStorage); // Return a string array of keys

            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         <td></td>
                         <td></td>
                         </tr>`;
                index++;
            }
            contactList.innerHTML = data;
        }
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
            case "Contact List":
                DisplayContactListPage();
                break;
        }

    }
    window.addEventListener("load", Start)
})();