"use strict"
var prompt = require('prompt-sync')();
var utility = require('../Utility/utility.js');
var fs = require('fs');

function stock()
{   
    console.log("1 : Add to inventory");
    console.log("2 : Delete from an inventory");
    console.log("3 : Exit");
    var choice = prompt("Enter your choice: ");
    var totalStock=0, totalSharePrice=0, inventory;
    fs.readFile('./stock.json', 'utf-8', function(err, stock){
        if (err) throw err
        inventory = JSON.parse(stock);
        switch(parseInt(choice))
        {
            case 1:
            var number = prompt("Enter the number of stocks required ==> ")
            for (var i =0;i <number; i++)
            {
            var name = prompt("Enter the stockname ==> ");
            var numOfShare = prompt("Enter the number of share==> "); 
            var price = prompt("Enter the share price==> "); 
            inventory.stock.push({   
            stockName: name,
            numberOfShare: parseInt( numOfShare),
            sharePrice: parseInt( price),
            })
        }
 for (var i=0; i < inventory.stock.length; i++)     
         { 
         console.log(" Stockname is  " + inventory.stock[i].stockName + " and the number of share " + inventory.stock[i].numberOfShare + " with the share price " + inventory.stock[i].sharePrice + " and its result " +inventory.stock[i].numberOfShare * inventory.stock[i].sharePrice + " rupees" );
         }
            for(var j =0; j < inventory.stock.length;j++)
            {
            totalStock += parseInt( inventory.stock[j].numberOfShare);
            totalSharePrice += parseInt( inventory.stock[j].sharePrice);
            }
            console.log("Total number of shares are ==> " +totalStock);
            console.log("Total number of share  price are ==> " +totalSharePrice); 
            
    console.log(inventory);
    fs.writeFile('./stock.json', JSON.stringify(inventory), 'utf-8', function(err) {
    if (err) throw err
    console.log("Done");
    });

break;
 
case 2 :
var del =  prompt("Enter the index you want to delete: ");
delete inventory.stock[del];
fs.writeFile('./stock.json', JSON.stringify(inventory), 'utf-8', function(err) {
    if (err) throw err
    console.log(inventory)
    })
break;
    }

        
})
    
        
}

stock()