"use strict"
var prompt = require('prompt-sync')();
var fs = require('fs')
//fs.readFileSync('/home/nadeem/Programlabz/OOPSPrograms/Main/addressBook.json')
var utility = require('/home/nadeem/Programlabz/OOPSPrograms/Utility/utilityAdress.js')
var account = new utility();

function choosing() {

    var action = prompt('Press 1 to continue the process or Press 2 to exit :');

    if (action == 1) {

        dataProcessing()
    }

    else if (action == 2) {

        process.exit();

    }

    else {

        console.log('Invalid choosing :');

    }

}
function dataProcessing() {
    console.log();
    console.log('Press 1 To create address book --> ')
    console.log('Press 2 to edit address book --> ')
    console.log('Press 3 exit --> ')
    console.log();
    var option = prompt('Enter your option --> ')


    switch (parseInt(option)) {
        case 1:
            account.add();
            account.save();
            choosing();
            break;

        case 2: {
            console.log()
            console.log("Press 1 update the address book  ")
            console.log("Press 2 to search in the addressbook  ");
            console.log("press 3 to sort the address book ")
            console.log("press 4 to delete an information in the address book ")
            var choices = prompt(" enter your choice --> ");

            switch (parseInt(choices)) {
                case 1: account.view();
                    account.update();
                    account.save();
                    choosing();
                    break;

                case 2: account.view();
                    account.search();
                    account.save();
                    choosing();
                    break;

                case 3: account.view();
                    account.arrange();
                    account.save();
                    account.view();
                    choosing();
                    break;

                case 4: account.view();
                    account.delete();
                    account.save();
                    account.view();
                    choosing();
                    break;

                default: console.log(" Terminated ")
                    break;

            }

        }
        case 6: process.exit();
            break;

        default:
            break;
    }

}

dataProcessing();