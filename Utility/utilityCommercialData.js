
var fs = require('fs');
var prompt = require('prompt-sync')();
var obj = JSON.parse(fs.readFileSync('/home/nadeem/Programlabz/OOPSPrograms/Main/commercial.json', 'utf8'));

class StockAccount {

    constructor(name, shares, price) {
        this.name = name;
        this.shares = shares;
        this.price = price;
        this.array = [];
        this.result = [];

    }

    account() {
        console.log('Stocks present in Stock account are : ')

        for (let key in obj) {

            this.result.push(obj[key]);
            console.log(obj[key]);

        }
    }

    netValue() {

        for (let key in obj) {

            console.log('\n==> The value for ' + (obj[key].name) + ' Shares = ' + (obj[key].shares) * (obj[key].price) + ' ₹' + '\n');

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
                date: 'Stock was purchased on ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),  // by key "name" store value "John"
                time: 'Stock was purchased at ' + date.getHours() + ' hours :' + date.getMinutes() + ' minutes:' + date.getSeconds() + ' seconds'
            };

            this.array.push(user1);

            console.log('Stock is purchased successfully!!!');

            this.result.push(user);



        }

    }

    sell(count) {

        var date = new Date();

        for (let index = 0; index < count; index++) {

            var erase = prompt('Enter Stock name to be removed :');
            var temp = -1;
            for (let i = 0; i < this.result.length; i++) {

                if (this.result[i].name == erase) {

                    temp = i;

                }

            }

            if (temp != -1) {
                var company = this.result[temp].name;
                delete this.result[temp];

                console.log('Stock sold');



                this.result = this.result.filter(this.filterByID);

                let user = {

                    name: company,
                    date: 'Stock was sold on ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
                    time: 'Stock was sold at ' + date.getHours() + ' Hours :' + date.getMinutes() + ' Minutes:' + date.getSeconds() + ' Seconds'
                };

                this.array.push(user);
            }

            else {

                console.log('The stock is not available in your account ');

            }

        }

    }

    save() {

        var json = JSON.stringify(this.result);

        console.log('Successfully updated in the file!!');


        fs.writeFileSync('/home/nadeem/Programlabz/OOPSPrograms/Main/commercial.json', json, 'utf8');
    }

    printReport() {

        console.log('Stocks present in your account are : ')

        for (let key in this.result) {

            console.log(this.result[key]);

        }

        for (let key in this.result) {

            console.log('\n==> The value for ' + (this.result[key].name) + ' Shares = ' + (this.result[key].shares) * (this.result[key].price) + ' dollars' + '\n');

        }

        console.log('Transactions made in this session are :');

        console.log(this.array);


    }

    filterByID(item) {

        if (item.name !== undefined) {
            return true;
        }
        invalidEntries++;
        return false;
    }

}

module.exports = StockAccount;