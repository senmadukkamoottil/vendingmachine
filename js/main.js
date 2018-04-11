/* main.js */
/* coins object */
coins = {
    nickel: {
            weight: 5,
            size: 1,
            value: .05
    },
    dime: {
            weight: 10,
            size: 2,
            value: .10
    },
    quarter: {
            weight: 15,
            size: 3,
            value: .25
    }
};

/* products object */
products = { 
             coke: {
                    price: 1, stock: 10
                },
             chips:{
                    price:.5, stock: 10 
                }, 
             candy:{
                    price:.65, stock: 10
                } 
            };


var totalAmountText = document.getElementById("total_amount");
var balanceAmountText = document.getElementById("balance_amount");
var totalAmount = parseInt(totalAmountText.value);
checkTotalAmount(totalAmount);

var cokeButton = document.getElementById("coke");
var chipsButton = document.getElementById("chips");
var candyButton = document.getElementById("candy");

var cokeStock = document.getElementById("coke_count");
var chipsStock = document.getElementById("chips_count");
var candyStock = document.getElementById("candy_count");

var doneButton = document.getElementById("done");

/* initilize stock info */
cokeStock.innerHTML = products.coke.stock;
chipsStock.innerHTML = products.chips.stock;
candyStock.innerHTML = products.candy.stock;

/* Complete the operation */
doneButton.addEventListener("click", function(){
    if(totalAmountText.value != 'Insert Coins'){
        balanceAmountText.value = totalAmountText.value;
        
        cokeButton.disabled = true;
        chipsButton.disabled = true;
        candyButton.disabled = true;

        totalAmountText.value = "Insert Coins";
    }
});

/* Manage coins */
var nickelButton = document.getElementById("nickel");
nickelButton.addEventListener("click", function(){
    totalAmount += coins.nickel.value;
    checkTotalAmount(totalAmount);
});

var dimeButton = document.getElementById("dime");
dimeButton.addEventListener("click", function(){
    totalAmount += coins.dime.value;
    checkTotalAmount(totalAmount);
});

var quarterButton = document.getElementById("quarter");
quarterButton.addEventListener("click", function(){
    totalAmount += coins.quarter.value;
    checkTotalAmount(totalAmount);
});

/* Manage products selection*/
cokeButton.addEventListener("click", function(){
    totalAmount -= products.coke.price;
    updateStock('coke');
    checkTotalAmount(totalAmount);
});

chipsButton.addEventListener("click", function(){
    totalAmount -= products.chips.price;
    updateStock('chips');
    checkTotalAmount(totalAmount);
});

candyButton.addEventListener("click", function(){
    totalAmount -= products.candy.price;
    updateStock('candy');
    checkTotalAmount(totalAmount);
});


/* Function to update total amount on product selection and coin insert */
function checkTotalAmount(amount){
    amount = amount.toFixed(2);

     if((amount > 0)){
        totalAmountText.value = amount;

        if(amount >= 1){
            cokeButton.disabled = false;
            chipsButton.disabled = false;
            candyButton.disabled = false;
        } else if(amount >= .65){
            cokeButton.disabled = true;
            chipsButton.disabled = false;
            candyButton.disabled = false;
        } else if(amount >= .5){
            cokeButton.disabled = true;
            chipsButton.disabled = false;
            candyButton.disabled = true;
        }
     } else{
        totalAmountText.value = "Insert Coins";
     }   
}

/* update product stock */
function updateStock(item){
    if(item == 'coke'){
        products.coke.stock -=1;
        if(products.coke.stock > 0){
            cokeStock.innerHTML = products.coke.stock;
        } else {
            cokeStock.innerHTML = "Out of stock";
        } 
    } else if(item == 'chips'){
        products.chips.stock -=1;
        if(products.chips.stock > 0){
            chipsStock.innerHTML = products.chips.stock;
        }  else {
            chipsStock.innerHTML = "Out of stock";
        }
    } else if(item == 'candy'){
        products.candy.stock -=1;
        if(products.candy.stock > 0){
            candyStock.innerHTML = products.candy.stock;
        }  else {
            candyStock.innerHTML = "Out of stock";
        }
    }
}

