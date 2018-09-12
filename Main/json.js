"use strict"
var prompt = require('prompt-sync')();
var utility = require('../Utility/utility.js');
var fs = require('fs');

function json()
{   
fs.readFile('sample.json', function(err,sample)
{
    let choice;
    var jsonData = sample;
    var inventory = JSON.parse(jsonData);
    console.log("-------------Inventory Data Management----------------------")
    console.log();
    console.log("Press 1 for rice details");
    console.log("Press 2 for wheat detail");
    console.log("Press 3 for pulse details");
    console.log();
    choice = prompt("Enter your choice ==> ")
    if (choice == 1)
    {
        for (var i=0; i < inventory.rice.length; i++)
        {
        console.log(" Per kg of " + inventory.rice[i].name + " costs " + inventory.rice[i].price + " for weigth " + inventory.rice[i].weight + " it costs " +inventory.rice[i].weight * inventory.rice[i].price + " rupees" );
        }
    }
    else if (choice ==2)
    {
        for (var i=0; i < inventory.wheat.length; i++)
        {
        console.log(" Per kg of " + inventory.wheat[i].name + " costs " + inventory.wheat[i].price + " for weigth " + inventory.wheat[i].weight + " it costs " +inventory.wheat[i].weight * inventory.wheat[i].price + " rupees" );
        }
    }
    else if(choice ==3)
    {
        for (var i=0; i < inventory.pulses.length; i++)
        {
        console.log(" Per kg of " + inventory.pulses[i].name + " costs " + inventory.pulses[i].price + " for weigth " + inventory.pulses[i].weight + " it costs " +parseInt(inventory.pulses[i].weight) * parseInt(inventory.pulses[i].price) + " rupees" );
        }
    }
});
}
json()

 
        
