var prompt = require('prompt-sync')();
var utility = require('/home/nadeem/Programlabz/OOPSPrograms/Utility/utilityList.js');
class Account
{
    constructor(arrayOfObjects,totalPrice, amount,report)
    {
        this.totalPrice = 1;
        this.amount = 0;
        this.report=[];
    }

    buy(num)
    {
        for(var i=0;i<num;i++)
        {
            var Name = prompt("Enter the item to be purchased: ");
            var number = prompt("Enter the number of items purchased: ");
            var price = prompt("Enter the price per item: ");
            var customer = {
                name: Name,
                number: number,
                price: price
            }
            list.add(customer);
            totalPrice = parseInt(num) * parseInt(price);
            console.log("The total price of all the stocks is "+totalPrice); 
            var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The purchase time of the item is "+time);
   } 
}
    
sell(num)
{
    for(var j=0;j<num;j++)
    {
    var del = prompt("Enter the index of item you want to purchase: ");
    var result = list.indexOf(del);
    console.log(result);
    if(result != -1)
    {
        list.removeFrom(del);
    }
    }
    var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The purchase time is "+time);
    
}
accountReport()
{
  list.printList();     
  
}
}
    var list = new utility();
    var s = new Account();
    var totalPrice=1, amount =0,report=[];
    var num = prompt("Enter the total number of stocks purchased: ");
                s.buy(num);
                s.sell(num);
                s.accountReport();
