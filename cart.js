///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce(function(acc, curr) {
  return {price: acc.price + curr.price}
     
  
    
})
// console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal,couponValue, tax) => {
    
    return (cartTotal += cartTotal * tax) - couponValue
}
// console.log(calcFinalPrice(100, 10, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/



/*
    TEXT ANSWER HERE

dine in or take out: determine if customer is dine in or take out
customer quantity: if dining in how many guest will need to be seated
any children: if there are children will they need a booster seat? they will need a kids menu 
order: order placed
cash or credit: determine method of payment
*/

/*
    Now, create a customer object following your own
    guidelines.
*/
let cartPage = {
    customerType: "Dine-In or Take Out?",
    customerQuantity: "How many guests are there?",
    children: "Do you have any Children? Will they need a booster seat? Provide kids menu",
    order: "Please place order",
    paymentMethod: "Cash or Credit"
}
//CODE HERE
