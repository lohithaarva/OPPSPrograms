/*var prompt = require('prompt-sync')();
var fs = require('fs');
var inventory = fs.readFileSync('./commercial.json', 'utf-8', function(err, commercial){
if (err) throw err
inventory = JSON.parse(commercial);

})
class Stock
{   
    
    constuctor(totalStock,totalSharePrice,inventory)
    {
        this.totalStock = 0,
        this.totalSharePrice =0,
        this.inventory;
    }

        stockaccount()
        {
        var number = prompt("Enter the number of stocks required ==> ")
            for (var i =0;i <number; i++)
            {
            var name = prompt("Enter the stockname ==> ");
            var numOfShare = prompt("Enter the number of share==> "); 
            var price = prompt("Enter the share price==> ");
            var temp = {   
                stockName: name,
                numberOfShare: parseInt( numOfShare),
                sharePrice: parseInt( price),
            }
            this.inti.commercial.push(temp)
        }
        return this.inti;
    }
    */

var fs = require('fs');
var prompt = require('prompt-sync')()
var obj = fs.readFileSync('./commercial.json')
    inventory = JSON.parse(obj);

    
class StockAccount 
{

    constructor(name, shares, price) {
        this.name = name;
        this.shares = shares;
        this.price = price;
        this.array = [];
        this.res = [];

    }

    portfolio() {
        console.log('Stocks present in portfolio are : ')

        for (let key in obj.inventory) {

            this.res.push(obj.inventory[key]);
            console.log(obj.inventory[key]);

        }
    }

    netValue() {

        for (let key in obj.inventory) {

            console.log('\n==> The value for ' + (obj.inventory[key].name) + ' Shares = ' + (obj.inventory[key].shares) * (obj.inventory[key].price) + "dollars" + '\n');
    
        }
    }

    purchase(count) {

        var date = new Date();

        for (let index = 0; index < count; index++) {

            var name = prompt('Enter Company name :');
            var shares = prompt('Enter no of Shares to buy :');
            var price = prompt('Enter price at which stock need to purchase :');
            
            let user = {  
                
                name: name,
                shares: shares,
                price: price  
              };

              let user1 = {  
                
                name: name,
                date: 'Stock purchased on '+ date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),  // by key "name" store value "John"
                time: 'Stock purchased at '+date.getHours()+' Hours :'+date.getMinutes()+' Minutes:'+ date.getSeconds()+ ' Seconds'       
              };
           
              this.array.push(user1);

              console.log('Successfully...!! purchased the stock');
              
       this.res.push(user);

        

    }
           
    }

    sell(count) {

        var date = new Date();

        for (let index = 0; index < count; index++) {

        var erase = prompt('Enter Stock name to be removed :');
        var temp = -1;
        for (let i = 0 ; i < this.res.length ; i++) {

            if (this.res[i].name == erase) {

                temp = i;

            }

        }

        if (temp != -1) {
           var company = this.res[temp].name;
            delete this.res[temp];

            console.log('Stock sold');

            
              
            this.res = this.res.filter(this.filterByID);

            let user = {  
                
                name: company,
                date: 'Stock sold on '+ date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),
                time: 'Stock sold at '+date.getHours()+' Hours :'+date.getMinutes()+' Minutes:'+ date.getSeconds()+ ' Seconds'       
              };
           
              this.array.push(user);
        }

        else {

            console.log('Sorry...! Stock not present in .Json File ');

        }

    }

}

save() {

    var json = JSON.stringify(this.res);

    console.log('Successfully updated in the file...!');
    

    fs.writeFileSync('/home/nadeem/Programlabz/OOPSPrograms/Main/commercial.json', json, 'utf8');
}

printReport() {

    console.log('Stocks present in portfolio are : ')

    for (let key in this.res) {

        console.log(this.res[key]);

    }

    for (let key in this.res) {

          console.log('\n==> The value for ' + (this.res[key].name) + ' Shares = ' + (this.res[key].shares) * (this.res[key].price) + ' ₹' + '\n');
  
      }

      console.log('Transactions made in this session are :');
      
      console.log(this.array);
      

}

filterByID(item) {

    if (item.name !== undefined ) {
      return true;
    } 
    invalidEntries++;
    return false; 
  }



}



module.exports = StockAccount;

   

