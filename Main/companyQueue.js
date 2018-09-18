var utility= require('/home/nadeem/Programlabz/OOPSPrograms/Utility/queue.js')
var prompt = require('prompt-sync')();
var q = new utility();
var prompt = require('prompt-sync')();
var d = new Date();
class StockAccount {

    buy(count) {



        for (let i = 0; i < count; i++) {

            var name = prompt('Enter the name: ');
            var number = prompt('Enter the number of share: ');
            var price = prompt('Enter the price: ');
            var date = (d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear())
            var time = (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())


            let user = {
                name: name,
                number: number,
                price: price,
                date: date,
                time: time
            };

            console.log('Successfully purchased the stock on ' + d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

            q.enqueue(user)
        }
    }

    sell(count) {
        for (let i = 0; i < count; i++) {

            var res = q.dequeue();
            console.log(res);
        }
    }
    stockList() {
        q.printQ();
    }
}

var stock = new StockAccount();
while (1) {
    console.log('1.Buy Stocks')
    console.log('2.Sell Stocks')
    console.log('3.Print Stock list')
    console.log('4.Exit')
    var choice = prompt('Enter your choice ?')
    switch (choice) {
        case '1': var count = prompt("Enter the number of stocks to be purchased: ");
            stock.buy(count);
            break;
        case '2': var count = prompt("Enter the number of stocks to be sold: ");
            stock.sell(count)
            break;

        case '3': //stock.stockReport();
            stock.stockList();
            break;

        case '4': process.exit()

        default: console.log('No Such Option ')
            break;
    }
}