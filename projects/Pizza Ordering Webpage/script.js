let form_object = document.querySelector("pizza_order_form");

let quantInput1 = document.querySelector("#quantity_bigitaly");
let orderTotal1 = document.querySelector("#unit_total_bigitaly");

let quantInput2 = document.querySelector("#quantity_meatlover");
let orderTotal2 = document.querySelector("#unit_total_meatlover");

let quantInput3 = document.querySelector("#quantity_veglover");
let orderTotal3 = document.querySelector("#unit_total_veglover");

let orderTotalFnl = document.querySelector("#order_total");
let taxAmt = document.querySelector("#tax");
let finalAmt = document.querySelector("#final_amt");


quantInput1.addEventListener('input', function(input){
    orderTotal1.value = (12.0)*(parseInt(quantInput1.value));
    calcTotal();
})

quantInput2.addEventListener('input', function(){
    orderTotal2.value = (10.0)*(parseInt(quantInput2.value));
    calcTotal();
})

quantInput3.addEventListener('input', function(){
    orderTotal3.value = (9.50)*(parseInt(quantInput3.value));
    calcTotal();
})

function calcTotal(){
    orderTotalFnl.value = parseFloat(orderTotal1.value) + parseFloat(orderTotal2.value) + parseFloat(orderTotal3.value);
    taxAmt.value = Math.round(0.18*parseInt(orderTotalFnl.value));
    finalAmt.value = '₹'+parseInt((parseInt(orderTotalFnl.value)+parseInt(taxAmt.value)));
}


let orderBtn = document.querySelector("#order");
orderBtn.addEventListener('click', function(){
    document.querySelector("#name").focus();
})