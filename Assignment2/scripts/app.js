"use strict";
/*
 Names: Josh Frederick & Mark Spiers
 Date: February, 24 2023
 Student IDs: Josh: 100826320           Mark: 100817823
 File Name: app.js
 File Description: Main .js file to edit the website
 */
class User {
    constructor(firstName, lastName, emailAddress, password) {
        this.FirstName = firstName;
        this.LastName = lastName;
    //this.Username = username;
        this.EmailAddress = emailAddress;
        this.Password = password;
    }

    //GETTERS
    get FirstName() {
        return this.m_firstName;
    }

    get LastName() {
        return this.m_lastName;
    }

    /*get Username() {
    return this.Username;
    }*/

    get EmailAddress() {
        return this.m_emailAddress;
    }

    get Password() {
        return this.m_password;
    }
    //GETTERS


    //SETTERS
    set FirstName(firstName) {
        this.m_firstName = firstName;
    }

    set LastName(lastName) {
        this.m_lastName = lastName;
    }

    /*set Username(username) {
    this.m_username = username;
    }*/

    set EmailAddress(email) {
        this.m_emailAddress = email;
    }

    set Password(password) {
        this.m_password = password;
    }


    toString() {
        return `First Name: ${this.FirstName}\n 
                    Last Name: ${this.LastName}\n 
                    Email Address: ${this.EmailAddress}\n
                    Password: ${this.Password}\n`;
    }

    serialize() {
        if (this.FirstName !== "" && this.LastName !== ""
            && this.EmailAddress !== "" && this.Password !== "") {
            return `${this.FirstName}, ${this.LastName}, 
                            ${this.EmailAddress}, ${this.Password}`;
        }
        else{
            console.error("One or more of the properties of the User object are missing or invalid");
            return null;
        }
    }
}
//IIFE - Immediately Invoked Function Expressions
//AKA - Anonymous Self-Executing Function

(function(){

    /**
     * Method to create a new link for the human resources page and add it to the navbar
     * @constructor
     */
    function AddHumanResourcesLink(){
        //Create the human resources link in the navbar
        let Navbar = document.getElementById("navbarList");
        // Variables for the human resources list, link and image tags
        let HrListTag = document.createElement("li");
        let HrLinkTag = document.createElement("a");
        let HrFontImage = document.createElement("i");

        // Set the links details including where it directs to
        HrLinkTag.textContent = "Human Resources";
        HrLinkTag.setAttribute("href", "human-resources.html");
        HrLinkTag.className = "nav-link";

        // Set a class name to be the same as the other links in the navbar
        HrListTag.className = "nav-list";

        // Set the font awesome image for human resources
        HrFontImage.className = "fa-solid fa-people-group";

        // Put everything together
        HrLinkTag.prepend(HrFontImage);
        HrListTag.appendChild(HrLinkTag);
        // Add the link to the navbar
        Navbar.insertBefore(HrListTag, Navbar.children[4]);
    }




    /**
     * Creates a navbar fixed to the bottom of the screen
     * @method
     */
    function LoadFooter(){
        document.write(`<div class="container fixed-bottom">
                               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                   <div class="container-fluid">
                                    <a class="navbar-brand" href="#"></a> Copyright 2023<br>All Rights Reserved</p>
                                   </div>
                               </nav>
                        </div>`);
    }


    /**
     * Method to validate an input field
     * @param {String} input_field_id
     * @param {RegExp} regular_expression
     * @param {String} error_message
     */
    function validateField(input_field_id, regular_expression, error_message){
        // Create a variable to hold the regular expression
        let fullPattern = regular_expression;
        // Create a variable to edit the messageArea <div> tag
        let errorMessage = $("#ErrorMessage");

        $(input_field_id).on("blur", function(){
            let fullText = $(this).val();
            // Check if the input fits the regular expression pattern
            if(!fullPattern.test(fullText)){
                // Set focus to the input field if the pattern is wrong and trigger the error message
                $(this).trigger("focus").trigger("select");
                errorMessage.addClass("alert alert-danger").text(error_message).show();
            }
            else{
                // Field is good, remove any error message
                errorMessage.removeAttr("Class").hide();
            }
        })
    }

    /**
     * Method to call validateField for each field in registration
     * @constructor
     */
    function RegisterFormValidation(){
        validateField("#firstName",
            /^([A-Z][a-z]{1,2}.?\s)?([A-Z][a-z]+)+$/, "Please enter a valid first name");
        validateField("#lastName",
            /^([A-Z][a-z]{1,2}.?\s)?([A-Z][a-z]+)+$/, "Please enter a valid last name");
        validateField("#password",
            /[0-9a-zA-Z]{6,}/, "Please enter a valid password");
        validateField("#emailAddress",
            /(?=^.{8,}$)[A-Za-z0-9]+@[A-Za-z0-9]/,
            "Please enter a valid email address");
    }

    function DisplayHomePage(){
        console.log("Home Page Called");
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
        });
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

    /**
     * Function to run when the login page is displayed - checks the form as well
     * @method
     */
    function DisplayLoginPage(){
        let MainContent = document.getElementsByTagName("main")[0];
        let LoginDiv = document.createElement("div");

        // MAIN BODY CODE - Create the login page form
        let LoginDivCode =
            `
                <div class="row">
                    <div class="offset-md-3 col-md-6 col-sm-12">
                      <div class="login" id="contentArea">
                        <h1 class="display-4">Login</h1>

                        <div id="messageArea"></div>

                        <form id="loginForm" novalidate>

                          <div class="form-group mb-2">
                            <div class="input-group">
                                          <span class="input-group-addon">
                                            <i class="fa fa-user">
                                            </i>
                                          </span>
                              <input id="username" name="username" type="text" class="form-control"   required
                                     value="" placeholder="Enter your username">
                            </div>
                
                          </div>
                
                          <div class="form-group mb-2">
                            <div class="input-group">
                                          <span class="input-group-addon">
                                            <i class="fa fa-lock">
                                            </i>
                                          </span>
                              <input id="password" name="password" type="password" class="form-control"   required
                                     value="" placeholder="Enter your password">
                            </div>
                
                          </div>
                          <div class="text-end">
                            <button id="loginButton" type="button" class="btn btn-primary btn-lg">
                              <i class="fas fa-sign-in-alt"></i> Login</button>
                          </div>
                        </form>
                
                      </div>
                      <p class="text-center text-muted small">
                        Don't have an account?
                        <a href="register.html">Register Here!</a>
                      </p>
                    </div>
                </div>
            `;
        LoginDiv.innerHTML = LoginDivCode;
        MainContent.appendChild(LoginDiv);

        let messageArea = $("#messageArea");
        messageArea.hide();
        $("#loginButton").on("click", function (){
            if(($("#username").val() != "") && ($("#password").val() != "")){
                messageArea.removeAttr("class").hide();
                let userName = $("#username").val();

                CheckLogin(userName, true);
                //location.href = "index.html";

            }
            else{
                $("#username").trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text("Error: Blank value").show();
                CheckLogin("", false);
            }
        });

    }

    /**
     * Method that loads when the register.html page is called. Runs through validation for the registrationg form.
     * @method
     */
    function DisplayRegisterPage(){
        let MainContent = document.getElementsByTagName("main")[0];
        let RegisterDiv = document.createElement("div");

        // MAIN BODY CODE - Creates the form for the webpage
        let RegisterDivCode =
            `   <div class="row">
                    <div class="offset-md-3 col-md-6 col-sm-12">
                      <div class="login" id="contentArea">
                        <h1 class="display-4">Register</h1>
                        <form id="registerForm" novalidate>
                          <p class="hint-text">Create your own account. It's free and only takes a minute.</p>
                
                          <div class="form-group">
                            <div class="row">
                              <div class="col-md-6">
                                <input class="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" required>
                              </div>
                              <div class="col-md-6">
                                <input class="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name" required>
                              </div>
                            </div>
                          </div>
                
                
                          <div class="form-group">
                            <div class="row">
                              <div class="col-md-12">
                                <input type="email" class="form-control" id="emailAddress" name="emailAddress" required
                                       value="" placeholder="Email">
                              </div>
                            </div>
                
                          </div>
                
                          <div class="form-group">
                            <div class="row">
                              <div class="col-md-12">
                                <input type="password" class="form-control" id="password" name="password"  required
                                       value="" placeholder="Password">
                              </div>
                            </div>
                
                          </div>
                
                          <div class="form-group">
                            <div class="row">
                              <div class="col-md-12">
                                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"  required
                                       value="" placeholder="Confirm Password">
                              </div>
                            </div>
                          </div>
                
                
                          <div class="text-right">
                            <button id="submitButton" type="submit" class="btn btn-primary btn-lg"> Register</button>
                          </div>
                        </form>
                
                      </div>
                      <p class="text-center text-muted small">
                        Already have an account?
                        <a href="login.html">Sign in</a>
                      </p>
                    </div>
                  </div>
            `;
        RegisterDiv.innerHTML = RegisterDivCode;
        MainContent.appendChild(RegisterDiv);
        // Create a <div> tag to show errors
        $("#mainContent").append(`<div id="ErrorMessage"></div>`);
        let errorMessage = $("#ErrorMessage");
        errorMessage.hide();
        // Create variables to hold the values in the input form
        let firstName = $("#firstName");
        let lastName = $("#lastName");
        let emailAddress = $("#emailAddress");
        let password = $("#password");
        let confirmPassword = $("#confirmPassword");
        RegisterFormValidation();

        // When the submit button is clicked
        $("#submitButton").on("click", function (){
            // Prevent the forms submission
            event.preventDefault();
            // Check if the password is the same as the confirmation password
            if($("#password").val() === $("#confirmPassword").val()){
                // Make sure there is a valid value in each text field
                if(firstName.val() !== "" && lastName.val() !== "" && emailAddress.val() !== ""
                    && password.val() !== "" && confirmPassword.val() !==""){
                    // Create the user object and show it in the console
                    let user = new User(firstName.val(), lastName.val(), emailAddress.val(), password.val());
                    console.log(`${user.toString()}`);

                    // Clear all of the fields
                    $("#firstName").val("");
                    $("#lastName").val("");
                    $("#emailAddress").val("");
                    $("#password").val("");
                    $("#confirmPassword").val("");
                }
            }
            else{
                errorMessage.addClass("alert alert-danger").text(
                    "Password must match confirmation password").show();
            }
        })

    }




    // Start function to call the methods listed above in a switch case on start up
    function Start(){
        console.log("App Started!");
        AddHumanResourcesLink();

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
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }

    }
    window.addEventListener("load", Start)
    LoadFooter();
})();