"use strict"
var prompt = require('prompt-sync')();
//var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilityData.js');
var fs=require('fs');

function inventory()
{
    var data = fs.readFileSync('stock.json');
    var jsonStock = JSON.parse(data);
    console.log("1: Google");
    console.log("2: Microsoft");
    console.log("3: Delloite");
    var choice = prompt("Please enter your choice: ");
    switch(parseInt(choice))
    {
        case 1:
        console.log("Price per share in Google is: "+jsonStock.stock[0].price);
        var share = prompt("Please enter the number of shares you want to purchase: ");
        // for(var i=0;i<jsonStock.stock.length;i++)
        // {
           var total = share*jsonStock.stock[0].price
        console.log("Per Stock in "+jsonStock.stock[0].Stockname+" is sold for Rs."+jsonStock.stock[0].price+" and for "+share+" shares the price would be Rs."+total);
        break;

        case 2:
        console.log("Price per share in Microsoft is: "+jsonStock.stock[1].price);
        var share = prompt("Please enter the number of shares you want to purchase: ");
        // for(var i=0;i<jsonStock.stock.length;i++)
        // {
           var total = share*jsonStock.stock[1].price
        console.log("Per Stock in "+jsonStock.stock[1].Stockname+" is sold for Rs."+jsonStock.stock[1].price+" and for "+share+" shares the price would be Rs."+total);
        break;

        case 3:
        console.log("Price per share Delloite is: "+jsonStock.stock[2].price);
        var share = prompt("Please enter the number of shares you want to purchase: ");
        // for(var i=0;i<jsonStock.stock.length;i++)
        // {
        var total = share*jsonStock.stock[2].price
        console.log("Per Stock in "+jsonStock.stock[2].Stockname+" is sold for Rs."+jsonStock.stock[2].price+" and for "+share+" shares the price would be Rs."+total);
        break;

        default:
        console.log("Please select a valid choice!!");
    }

    console.log("The total price of all the stocks is "+(jsonStock.stock[0].price+jsonStock.stock[1].price+jsonStock.stock[2].price));

}
inventory();