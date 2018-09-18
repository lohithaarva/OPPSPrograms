var prompt = require('prompt-sync')();
var EX = {};

/*
 * Linked List node with item object and next pointer to another node
 */
EX.StackNode = function(){
	this.item = null;
	this.next = null;
}

EX.LinkedStack = function(){
	var head = null;
	var size = null;
	
	/**
	 * Push function
	 * itereate through the list and then add the node to the last node in the list
	 */
	this.pushToStack = function(item){
		var node = new EX.StackNode();
		node.item = item;
		node.next = null;
		if(size < 1 && head === null){
			head = node;
			head.next = null;
			size = 1;
		}else{
			var current = head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}
	
	/**
	 * Pop Function
	 * Iterate through the list and grab the last item and remove it from list
	 */
	this.popFromStack = function(){
		var current = head;
		if(size === 0){
			return;
		}
		if(size === 1){
			head = null;
			size = 0;
			return current;
		}
		var prev = current;  // 543
		while(current.next !== null){
				prev = current;
				current = current.next;
		}
		prev.next = null;
        size -= 1;
        console.log(current);
		return current;
	}
	
	// Function to check if stack is empty
	this.isStackEmpty = function(){
		return (size < 1) ? true : false;
	}
	
	// Function to get top item of the stack
	this.stackTop = function(){
		var current = head;
		if(size > 0 && head !== null){
			while(current.next !== null){
				current = current.next;
			}
			return current.item;
		}else{
			console.log("There is no item in the stack");
			return null;
		}
	}
	
	this.printStack = function(){
		var current = head;
		while(current.next !== null){
			console.log(current.item);
			current = current.next;
		}
		console.log(current.item);
	}
	
}



class Account
{
    constructor(totalPrice)
    {
        this.totalPrice = 1;
        
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
            stack.pushToStack(customer);
            totalPrice = parseInt(num) * parseInt(price);
            console.log("The total price of all the stocks is "+totalPrice); 
            var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The purchase time of the item is "+time);
   } 
}
    
sell()
{
    var num = prompt("Enter the number of item you want to purchase: ");

    for(var j=0;j<num;j++)
    {
        stack.popFromStack();
   
    }
    var date = new Date();
            var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
            console.log("The purchase time is "+time);
    
}
accountReport()
{
  stack.printStack();     
  
}
}
    var stack = new EX.LinkedStack();
    var s = new Account();
    var totalPrice=1, amount =0,report=[];
    var num = prompt("Enter the total number of stocks purchased: ");
                s.buy(num);
                s.sell();
                s.accountReport();
