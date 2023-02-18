"use strict";
/**
 * Name: Josh Frederick
 * Date: January, 31 2023
 * File Name: app.js
 * File Description: JavaScript file that holds functions
 */
//IIFE - Immediately Invoked Function Expressions
//AKA - Anonymous Self-Executing Function

(function(){

    /**
     * Instantiates a contact and stores in localStorage
     * @param fullName
     * @param contactNumber
     * @param emailAddress
     * @constructor
     */
    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize()) {
            let key = contact.FullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.serialize());
        }
    }

    function AjaxRequest(method, url, callback){

        let xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", () => {

            if(xhr.readyState === 4 && xhr.status === 200){

                if(typeof callback === "function") {
                    callback(xhr.responseText);

                }
                else{
                    console.error("Error: callback is not a valid function");
                }
            }
        });

        xhr.open(method, url);
        xhr.send();
    }

    function LoadHeader(html_data){
        $("header").html(html_data);
        $(`li > a:contains(${document.title})`).addClass("active");
        CheckLogin();
    }


    function DisplayHomePage(){
        console.log("Home Page Called");

        let xhr = new XMLHttpRequest();

        $("#AboutUsBtn").on("click", () => {
           location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3" >This is the main paragraph</p>`);

        $("body").append(`<article class="container">
                    <p id="ArticleParagraph" class="mt-3"> This is my article paragraph</p></article>`)


    }


    function DisplayProductPage(){
        console.log("Products Page Called");
    }
    function DisplayServicesPage(){
        console.log("Services Page Called");
    }
    function DisplayAboutUsPage(){
        console.log("About Us Page Called");
    }


    /**
     * This function will validate an input provided based on a given regular expression
     * @param {string} input_field_id
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
    function validateField(input_field_id, regular_expression, error_message){
        let fullNamePattern = regular_expression;
        let messageArea = $("#messageArea");

        $(input_field_id).on("blur", function(){

            let fullNameText = $(this).val();
            if(!fullNamePattern.test(fullNameText)) {
                // Fail validation
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }
            else{
                // Pass validation
                messageArea.removeAttr("class").hide();

            }

        });
    }

    function ContactFormValidation(){
        validateField("#fullName",
            /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/,
            "Please enter a valid first and last name"); // fullName
        validateField("#contactNumber",
            /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid contact number"); // contactNumber
        validateField("#emailAddress",
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address"); // emailAddress
    }

    function DisplayContactPage(){
        console.log("Contact Us Page Called");

        ContactFormValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event){
            if(subscribeCheckbox.checked){
                let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
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
                let contact = new core.Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         
                         <td class="text-center">
                            <button value="${key}" class="btn btn-primary btn-sm edit">
                                <i class="fas fa-edit fa-sm"></i> Edit
                            </button>
                         </td>
                         
                         <td class="text-center">
                            <button value="${key}" class="btn btn-danger btn-sm delete">
                                <i class="fas fa-trash-alt fa-sm"></i> Delete
                            </button>
                         </td>
                         
                         </tr>`;
                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click", () => {
                location.href = "edit.html#add";
            });


            $("button.delete").on("click", function (){
                //confirm delete
                if(confirm("Delete contact, are you sure?")){
                    localStorage.removeItem($(this).val())
                }
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function (){
                location.href = "edit.html#" + $(this).val();
            });

        }

    }

    function DisplayEditPage(){
        console.log("Edit Page");

        let page = location.hash.substring(1);
        ContactFormValidation();
        switch(page){
            case "add":
                $("main>h1").text("Add Contact");
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"></i> Add`);

                $("#editButton").on("click", (event) => {
                    event.preventDefault();
                    AddContact(fullName.value, contactNumber.value, emailAddress.value);
                    location.href = "contact-list.html";
                });

                $("#cancelButton").on("click", () =>{
                    location.href = "contact-list.html";
                });

                break;
            default:{
                // edit case
                //get contact information from localStorage
                let contact = new Contact();
                contact.deserialize(localStorage.getItem(page));

                //display the contact info in the edit form
                $("#fullName").val(contact.FullName);
                $("#contactNumber").val(contact.ContactNumber);
                $("#emailAddress").val(contact.EmailAddress);

                //When editButton is pressed - update the contact
                $("#editButton").on("click", (event) => {
                   event.preventDefault();
                   //get any changes from the form
                    contact.FullName = $("#fullName").val();
                    contact.ContactNumber = $("#contactNumber").val();
                    contact.EmailAddress = $("#emailAddress").val();

                    // replace the item in localStorage
                    localStorage.setItem(page, contact.serialize());

                    // return to the contact-list
                    location.href = "contact-list.html";
                });
            }
            break;
        }

    }

    function DisplayLoginPage(){
        console.log("Loading Login Page");


        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function (){

            let success = false;
            let newUser = new core.User();

            $.get("./data/user.json", function(data){

                for(const user of data.user){
                    if(username.value === user.Username && password.value === user.Password){
                        success = true;
                        newUser.fromJSON(user);
                        break;
                    }
                }

                if(success){
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();
                    location.href = "index.html";
                }
                else{
                    // Failed the authentication
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid credentials");
                }
            });

            $("#cancelButton").on("click", function() {
                document.forms[0].reset();
                location.href = "index.html";
            })


        });
    }

    function CheckLogin(){
        if(sessionStorage.getItem("user")){
            $("#login").html(`<a id="logout" class="nav-link" href="#">
            <i class="fas fa-sign-out-alt"></i> Logout</a>`);
        }
        $("#logout").on("click", function(){
           sessionStorage.clear();
           location.href = "login.html";
        });
    }

    function DisplayRegisterPage(){
        console.log("Loading Registry Page")
    }

    // Start function to call the methods listed above in a switch case on start up
    function Start(){
        console.log("App Started!")

        AjaxRequest("GET", "header.html", LoadHeader);

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
            case "Edit Contact":
                DisplayEditPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }

    }
    window.addEventListener("load", Start)
    
})();