var fs = require('fs');
var prompt = require('prompt-sync')();
var obj = JSON.parse(fs.readFileSync('/home/nadeem/Programlabz/OOPSPrograms/Main/addressBook.json', 'utf8'));
var strict = /[a-zA-Z]/g
var strict1 = /[0-9]/g
var strict2 = /[!@#$%^&*+_]/g

class AddressBook {

    constructor() {
        this.array = obj.details
    }

    add() {
        console.log("********** WELCOME TO ADDRESS BOOK *********");
        console.log();
        var fname = prompt("Enter your first name ==> ")
        if (fname.search(strict1) == -1 && fname.search(strict2) == -1) {
            var lname = prompt("Enter your last name ==> ")
            if (lname.search(strict1) == -1 && lname.search(strict2) == -1) {
                var city = prompt("Enter your city ==> ")
                if (city.search(strict1) == -1 && city.search(strict2) == -1) {
                    var state = prompt("Enter your state ==> ");
                    if (state.search(strict1) == -1 && state.search(strict2) == -1) {
                        var pincode = prompt("Enter your zipcode ==> ")
                        if (pincode.search(strict) == -1 && pincode.search(strict2) == -1 && pincode.length == 6) {
                            var phoneNumber = prompt("Enter your mobile number ==> ")
                            if (phoneNumber.search(strict) == -1 && phoneNumber.search(strict2) == -1 && phoneNumber.length == 10) {

                                let add = {
                                    fname: fname,
                                    lname: lname,
                                    Address: {
                                        city: city,
                                        state: state,
                                        pincode: pincode,
                                    },
                                    phoneNumber: phoneNumber,
                                }
                                this.array.push(add)
                                console.log(add)
                                this.save();
                            }
                            else {
                                console.log('Invalid phonenumber !!')
                                process.exit()
                            }
                        }
                        else {
                            console.log('Invalid pincode !!')
                            process.exit()
                        }
                    }
                    else {
                        console.log('Invalid state !!')
                        process.exit()
                    }
                }
                else {
                    console.log('Invalid city !!')
                    process.exit()
                }
            }
            else {
                console.log('Invalid name !!')
                process.exit()
            }
        }
        else {
            console.log('invalid name !!')
            process.exit()
        }
    }



    save() {
        let user = {

            details: this.array
        }
        let res = JSON.stringify(user)
        fs.writeFileSync('/home/nadeem/Programlabz/OOPSPrograms/Main/addressBook.json', res, 'utf-8')
    }

    view() {
        console.log(this.array);
    }

    delete() {
        var lname = prompt("Enter the last name of the person to be deleleted --> ")
        if (lname.search(strict1) == -1 && lname.search(strict2) == -1) {
            for (var i = 0; i < this.array.length; i++) {
                if (this.array[i].lname === lname) {
                    this.array.splice(i, 1);
                }
            }
            console.log("The address is deleted");
            console.log(this.array);
        }
        else {
            console.log('invalid name !!')
            process.exit()
        }

    }

    arrange() {
        console.log("Press 1 to sort by last name --> ");
        console.log("Press 2 to sort by zip code --> ");
        var choice = parseInt(prompt("Enter your choice --> "))
        switch (choice) {
            case 1:
                console.log(this.array)
                this.array.sort(this.sort1);
                console.log("Sorting according to the last name :");
                console.log();
                console.log(this.array);
                console.log();
                console.log("Sorted completed")
                break;

            case 2:
                this.array.sort(this.sort2)
                console.log("Sorting according to zipcode :");
                console.log();
                console.log(this.array);
                console.log();
                console.log("Sorted completed ")
                break;

            default:
                console.log("invalid choice");
                break;
        }


    }

    update() {
        var lname = prompt("Enter the last name of updating --> ")
        for (var i = 0; i < this.array.length; i++) {

            if (this.array[i].lname === lname) {
                console.log("Press 1 to update address: ")
                console.log("Press 2 to update phonenumber: ")
                console.log();
                var choice = prompt("enter your choice : ")
                switch (parseInt(choice)) {

                    case 1:
                        var cityNew = prompt("enter city you want to change -->");
                        if (cityNew.search(strict1) == -1 && cityNew.search(strict2) == -1) {

                            var stateNew = prompt("enter state you want to update -->")
                            if (stateNew.search(strict1) == -1 && stateNew.search(strict2) == -1) {

                                var pinNew = prompt("enter the pin code -->")
                                if (pinNew.search(strict) == -1 && pinNew.search(strict2) == -1 && pinNew.length == 6) {

                                    console.log()
                                    var user = {
                                        fname: this.array[i].fname,
                                        lname: this.array[i].lname,
                                        Address: {
                                            city: cityNew,
                                            state: stateNew,
                                            pincode: pinNew
                                        },
                                        phoneNumber: this.array[i].phoneNumber
                                    }
                                    this.array[i] = user;
                                    console.log("update completed")
                                }
                                else {
                                    console.log('Invalid pincode')
                                    process.exit()
                                }
                            }
                            else {
                                console.log('Invalid state')
                                process.exit()
                            }
                        }
                        else {
                            console.log('Invalid city')
                            process.exit()
                        }

                        break;

                    case 2:
                        var phoneNumberNew = prompt("Enter phone number you want to change --> ");
                        if (phoneNumberNew.search(strict) == -1 && phoneNumberNew.search(strict2) == -1 && phoneNumberNew.length == 10) {
                            console.log()
                            var user1 = {
                                fname: this.array[i].fname,
                                lname: this.array[i].lname,
                                Address: {
                                    city: this.array[i].city,
                                    state: this.array[i].state,
                                    pincode: this.array[i].pincode
                                },
                                phoneNumber: phoneNumberNew,
                            }
                            this.array[i] = user1;
                            console.log("phone number update completed")
                        }
                        else {
                            console.log('Invalid phone number')
                        }
                        break;

                    default:
                        console.log("invalid choice");
                        break;
                }
            }
            this.save();
        }
    }
    search() {
        var lname = prompt("Enter last name of the person to search : ");
        if (lname.search(strict1) == -1 && lname.search(strict2) == -1) {

            for (var i = 0; i < this.array.length; i++) {
                if (this.array[i].lname === lname) {
                    console.log("your searched address :")
                    console.log(this.array[i]);
                }
            }
        }
        else {
            console.log('invalid name')
            process.exit()
        }

    }

    sort2(a, b) {
        if (a.Address.pincode < b.Address.pincode)
            return -1;
        if (a.Address.pincode > b.Address.pincode)
            return 1;
        return 0;
    }

    sort1(a, b) {
        if (a.lname < b.lname)
            return -1;
        if (a.lname > b.lname)
            return 1;
        return 0;
    }



}
module.exports = AddressBook;

