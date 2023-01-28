"use strict";
/**
 * Name: Josh Frederick & Mark Spiers
 * Date: January, 27 2023
 * File Name: app.js
 * File Description: JavaScript file that holds functions for assignment 1
 */


(function(){

    /**
     *
     * @function Sets a background image along with a header and brief welcome message, welcoming the user to the home
     * page. This function is called when the user enters the home page.
     */
    function DisplayHomePage(){
        // Variables for the main tag, a header tag to welcome, and a paragraph tag to describe the page
        let MainContent = document.getElementsByTagName("main")[0];
        let WelcomeHeader = document.createElement("h1");
        let MainParagraph = document.createElement("p");

        // Set the attributes for the WelcomeHeader tag
        WelcomeHeader.setAttribute("id", "WelcomeHeader");
        WelcomeHeader.setAttribute("class", "mb-5");
        WelcomeHeader.textContent = "Welcome to our Webpage!";

        // Set the attributes for the MainParagraph tag
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "You are currently on our home page."

        // Add the WelcomeHeader and MainParagraph to the webpage body
        MainContent.appendChild(WelcomeHeader);
        MainContent.appendChild(MainParagraph);
        // Set the background image for the home page
        document.body.style.backgroundImage = "url('./images/indexBackground.jpg')";


    }

    /**
     *
     * @method shows all required information for when the user enters the Projects webpage
     *
     */
    function DisplayProjectsPage(){
        // Variable for the main content of the page
        let MainContent = document.getElementsByTagName("main")[0];
        // Create variables to hold the images of each project
        let ProjectOne = document.createElement("img");
        ProjectOne.src = "./images/projectImage1.PNG";
        ProjectOne.alt = "Project 1 image";
        // Adjust the width of project 1's image
        ProjectOne.width=900;

        let ProjectTwo = document.createElement("img");
        ProjectTwo.src = "./images/projectImage2.PNG";
        ProjectTwo.alt = "Project 2 image";
        // Adjust the size of project 2's image
        ProjectTwo.width = 1000;
        ProjectTwo.height = 500;

        let ProjectThree = document.createElement("img");
        ProjectThree.src = "./images/projectImage3.PNG";
        ProjectThree.alt = "Project 3 image";
        // Adjust the size of project 3's image
        ProjectThree.height = 400;
        ProjectThree.width = 1200;

        // Create variables to hold the headers for each project
        let ImageOneHeader = document.createElement("h3");
        let ImageTwoHeader = document.createElement("h3");
        let ImageThreeHeader = document.createElement("h3");

        // Create the variables to hold descriptions for each project
        let ImageOneDescription = document.createElement("p");
        let ImageTwoDescription = document.createElement("p");
        let ImageThreeDescription = document.createElement("p");

        // Set the value of each header
        ImageOneHeader.textContent = "Project 1";
        ImageTwoHeader.textContent = "Project 2";
        ImageThreeHeader.textContent = "Project 3";

        // Create descriptions for each project
        ImageOneDescription.textContent = "This is a project made in C#. It is a working webpage for a company to" +
            "track employee work, along with the pay they are owed. It allows for easy editing for company managers" +
            "as well.";
        ImageTwoDescription.textContent = "This is a project made in PHP and HTML. It is another working webpage for " +
            "a company to track their employees and clients. It includes working pagination to scroll through the " +
            "client and salesperson lists as well.";
        ImageThreeDescription.textContent = "This is a project made in COBOL. it is used to read and write a list" +
            " of contacts to a file.";

        // Display all information ordered header/description/image
        MainContent.appendChild(ImageOneHeader);
        MainContent.appendChild(ImageOneDescription);
        MainContent.appendChild(ProjectOne);

        MainContent.appendChild(ImageTwoHeader);
        MainContent.appendChild(ImageTwoDescription);
        MainContent.appendChild(ProjectTwo);

        MainContent.appendChild(ImageThreeHeader);
        MainContent.appendChild(ImageThreeDescription);
        MainContent.appendChild(ProjectThree);

    }

    /**
     *
     * @function creates a table to display the various services that we "provide". Gets displayed when the user enters
     * the services page
     */
    function DisplayServicesPage(){
        // Variable for the main content of the page
        let MainContent = document.getElementsByTagName("main")[0];
        // Variable for a table to hold pictures and descriptions of our best skills
        let ServicesTable = document.createElement("table");
        // Variable to hold the HTML to create the table
        let ServicesTableCode =`<tr>
                            <td style="text-align:center;"><img src="./images/globe-solid.svg" width="100" height="150"
                             alt="globe"></td>
                            <td style="text-align:center;"><img src="./images/file-code-solid.svg" width="100" height="150"
                             alt="code file"></td>
                            <td style="text-align:center;"><img src="./images/bolt-solid.svg" width="100" height="150"
                            alt="lightning bolt"></td>
                        </tr>
                        <tr>
                            <th style="padding:20px; text-align:center;">Website Development</th>
                            <th style="padding:20px; text-align:center;">Custom Programming</th>
                            <th style="padding:20px; text-align:center;">Quick Work</th>
                        </tr>
                        <tr>
                            <td style="text-align:center;">We will use our skills to create <br/>
                            the website of your dreams</td>
                            <td style="text-align:center; padding-left:40px;">We are skilled in Java, C++, C#, <br/>
                            HTML, PHP, JavaScript, and COBOL</td>
                            <td style="text-align:center; padding-left:40px;">We are dedicated to getting your <br/>
                            request done as soon as we can</td>
                        </tr>`;
        // Display the table
        ServicesTable.innerHTML = ServicesTableCode;
        MainContent.appendChild(ServicesTable);
    }

    /**
     *
     * @function creates a table to show the developers faces and a brief description about us. Gets called when the
     * user enters the About Us page
     */
    function DisplayAboutUsPage(){
        // Variable for the main content of the page
        let MainContent = document.getElementsByTagName("main")[0];
        // Variable for a table to hold the names, pictures and description about the developers
        let AboutUsTable = document.createElement("table");
        // Variable to hold the HTML to create the table
        let AboutUsTableCode =`<tr>
                            <th style="font-size:30px; text-align:center">Josh Frederick</th>
                            <th style="font-size:30px; text-align:center">Mark Spiers</th>
                        </tr>
                        <tr>
                            <td style="padding-right:20px; text-align:center;"><img src="./images/josh.jpg" width="500" 
                            height="500" alt="Picture of one of the website developers: Josh"></td>
                            <td style="padding-left:20px; text-align:center;"><img src="./images/mark.jpg" width="500" 
                            height="500" alt="Picture of one of the website developers: Mark"></td>
                        </tr>
                        <tr>
                            <td style="padding:20px; text-align:center;">
                            Josh is a student at Durham College in his 2nd year of his Computer<br/> 
                            Programming & Analysis 3 year program. Josh enjoys reading and playing <br/>
                            a multitude of video games in his free time, along with coding. After <br/>
                            he graduates, he is looking to enter the coding industry.</td>
                            <td style="padding:20px; text-align:center;">
                            Mark is a student at Durham College in his 2nd year of his Computer<br/>
                            Programming & Analysis 2 year program. Mark enjoys playing video games<br/>
                            such as COD, Boneworks and Garry's Mod when he isn't working on school.<br/>
                            After he graduates, Mark is looking to enter the workforce immediately.</td>
                        </tr>`;
        // Display the table
        AboutUsTable.innerHTML = AboutUsTableCode;
        MainContent.appendChild(AboutUsTable);


    }

    /**
     *
     * @function adds events to the contact form and waits 3 seconds before switching the user to the home page
     * when the submit button is pressed.
     */
    function DisplayContactPage(){
        let sendButton = document.getElementById("sendButton");
        let cancelButton = document.getElementById("cancelButton");
        sendButton.addEventListener("click", function(event){
            console.log(`Full Name: ${fullName.value}\n Contact Number: ${emailAddress.value}\n
            Email Address: ${contactNumber.value}\n Message: ${message.value}`);
            setTimeout(function (){
                window.location.href = "index.html";
            }, 3000);
        });

        cancelButton.addEventListener("click", function(event){
            ClearText();
        });
    }

    function ClearText(){
        document.getElementById('fullName').value = '';
        document.getElementById('emailAddress').value = '';
        document.getElementById('contactNumber').value = '';
        document.getElementById('message').value = '';
    }


    //Create the human resources link in the navbar
    let Navbar = document.getElementById("navbarLists");
    // Variables for the human resources list, link and image tags
    let HrListTag = document.createElement("li");
    let HrLinkTag = document.createElement("a");
    let HrFontImage = document.createElement("i");

    // Set the links details including where it directs to
    HrLinkTag.textContent = "Human Resources";
    HrLinkTag.setAttribute("href", "humanResources.html");
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


    /**
     *
     * @function Start function to call the methods listed above in a switch case on start up
     */
    function Start(){
        console.log("App Started!")
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Projects":
                DisplayProjectsPage();
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
    // Just write
    document.write(`<div class="container fixed-bottom">
                               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                   <div class="container-fluid">
                                    <a class="navbar-brand" href="#"></a> Copyright 2023<br>All Rights Reserved</p>
                                   </div>
                               </nav>
                        </div>`);
})();