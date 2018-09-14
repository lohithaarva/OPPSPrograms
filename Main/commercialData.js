/*"use strict"
var prompt = require('prompt-sync')();
var utility = require('../Utility/utilityStock.js');
var fs = require('fs');

    commercialData()
    { 
        var obj = new utility();

    console.log("************** STOCK ACCOUNT ***************")
    console.log();
    console.log("1 : Buy shares of stock in account ");
    console.log("2 : Sell shares of shares in account ");
    console.log("3 : Detailed value of stocks and values ")
    console.log("3 : Stock report ");
    console.log("4 : Exit");
    console.log();

    var choice = prompt("Enter your choice: ");
    
        switch(parseInt(choice))
        {
            case 1:
            console.log(inventory)
            
        }
            for (var i=0; i < inventory.commercial.length; i++)     
            { 
                console.log("Stockname is  " + inventory.commercial[i].stockName + " and the number of shares are  " + inventory.commercial[i].numberOfShare + " with the share price " + inventory.commercial[i].sharePrice + " and its result " +inventory.commercial[i].numberOfShare * inventory.commercial[i].sharePrice + " dollars" );
            }
                for(var j =0; j < inventory.commercial.length;j++)
                {
                totalStock += parseInt( inventory.commercial[j].numberOfShare);
                totalSharePrice += parseInt( inventory.commercial[j].sharePrice);
                }
                console.log("Total number of shares are ==> " +totalStock);
                console.log("Total number of share  price are ==> " +totalSharePrice); 
                console.log(inventory);
                fs.writeFile('./commercial.json', JSON.stringify(inventory), 'utf-8', function(err) {
                if (err) throw err
                //console.log("Done");
                });

                 console.log("Stock was addded on " +date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
                 console.log("Stock was added at the time " +date.getHours()+"hours "+ date.getMinutes()+"minutes "+ date.getSeconds()+"seconds");
                    
                

break;

 
    case 2 :
    var del =  prompt("Enter the index you want to delete: ");
    delete inventory.commercial[del];
    fs.writeFile('./commercial.json', JSON.stringify(inventory), 'utf-8', function(err) {
    if (err) throw err
    console.log(inventory)
    console.log("Stock was removed on "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
    console.log("Stock was added at the time " +date.getHours()+"hours "+ date.getMinutes()+"minutes "+ date.getSeconds()+"seconds");
                    
    }); 
    
break;
    }       
})
            


commercialData()
*/
var prompt = require('prompt-sync')();

var utility = require('../Utility/utilityStock.js');

var account = new utility();


/*function choosing() {

    var action = prompt('Enter  1 -> to continue services  or  2 -> to exit :');

            if (action == 1) {

                dataProcessing()     
            }

            else if(action == 2) {

                process.exit();

            }

            else {

                console.log('Invalid choosing :');
                
            }

}
*/

function dataProcessing() {

    console.log("************** STOCK ACCOUNT ***************")
    console.log();
    /*console.log('\nEneter 1 -> to view ur existing portfolio :');
    console.log('\nEneter 2 -> to view ur net value of all the stocks :');
    console.log('\nEneter 3 -> to purchase stocks :');
    console.log('\nEneter 4 -> to sell stocks :');
    console.log('\nEneter 5 -> to save the changes made in this Session :');
    console.log('\nEneter 6 -> to view report : \n');*/

    console.log("1 : Press 1 to view the stock report ");
    console.log("2 : Press 2 to view the value of the stock reports ");
    console.log("3 : Press 3 to buy shares of stock in account ")
    console.log("4 : Press 4 to sell shares of shares in account ");
    console.log("5 : Press 5 to save the cahnges in the file");
    console.log("6 : Press 6 to view the report")
    console.log("7 : Exit");
    console.log();


    var choice = parseInt(prompt('Enter choice : '));

    switch (choice) {

        case 1: account.portfolio();
                account.netValue();

            break;

        case 2: account.netValue();
        
            break;

        case 3: var count = prompt('Enter no of Stocks to Buy :');
            account.purchase(count);
            
            break;

        case 4: var count = prompt('Enter no of Stocks to Sell :');

            account.sell(count);
            
            break;
        case 5: account.save();

            break;
        case 6: account.printReport();
        
            break;

        default:
            break;
    }


}

dataProcessing();