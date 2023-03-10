"use strict";

namespace core{
    export class Contact{

        private m_fullName: string;
        private m_contactNumber: string;
        private m_emailAddress: string;

        constructor(fullName : string = "", contactNumber : string = "" , emailAddress : string = ""){
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;

        }

        // Getters and Setters
        public get FullName() : string{
            return this.m_fullName;
        }

        public get ContactNumber() : string{
            return this.m_contactNumber;
        }
        public get EmailAddress() : string{
            return this.m_emailAddress;
        }

        public set FullName(fullName : string){
            this.m_fullName = fullName;
        }

        public set ContactNumber(contactNumber : string){
            this.m_contactNumber = contactNumber;
        }

        public set EmailAddress(emailAddress : string){
            this.m_emailAddress = emailAddress;
        }

        public toString() : string{
            return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }

        public serialize() : string | null{
            if(this.FullName != "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more of the properties of the Contact object are missing or invalid");
            return null;
        }

        public deserialize(data : string){
            let propertyArray = data.split(",");
            this.m_fullName = propertyArray[0];
            this.m_contactNumber = propertyArray[1];
            this.m_emailAddress = propertyArray[2];
        }

    }


}
