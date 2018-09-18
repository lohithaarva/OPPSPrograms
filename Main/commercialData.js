var prompt = require('prompt-sync')();

var utility = require('/home/nadeem/Programlabz/OOPSPrograms/Utility/utilityCommercialData.js');

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


    console.log('\nPress 1 to view the exsisting account details: ');
    console.log('\nPress 2 to view the value of the stcks :');
    console.log('\nPress 3 to add shares of stock to account :');
    console.log('\nPress 4 to sell shares of stock to account :');
    console.log('\nPress 5 to save the chages in the file :');
    console.log('\nPress 6 to view the final report of the stock ');


    var choice = parseInt(prompt('Enter choice : '));

    switch (choice) {

        case 1: account.account();
        console.log("print")
            choosing();

            break;

        case 2: account.netValue();
            choosing()
            break;

        case 3: var count = prompt('Enter no of Stocks to Buy :');
            account.purchase(count);
            choosing()
            break;

        case 4: var count = prompt('Enter no of Stocks to Sell :');

            account.sell(count);
            choosing()
            break;
        case 5: account.save();
            choosing()
            break;
        case 6: account.printReport();
            choosing()
            break;

        default:
            break;
    }


}

dataProcessing();