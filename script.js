var phone_plusBtn = document.getElementById('phone-plusBtn');
phone_plusBtn.addEventListener('click',function(){
    var phone_amount = document.getElementById('phone-amount');
    phone_amount.value ++;

    // var phone_prize = document.getElementById('phone-prize').innerText;
    // var prize = parseFloat(phone_prize);
    // prize = prize + 1219 ;
    // document.getElementById('phone-prize').innerText = prize;
    prizeAdd('phone-prize',1219);
    
    // var sub_total = document.getElementById('subtotal').innerText;
    // var subTotal = parseFloat(sub_total);
    // subTotal = subTotal + 1219;
    // document.getElementById('subtotal').innerText = subTotal;
    prizeAdd('subtotal',1219);
    prizeAdd('total',1219);
})

var phone_minusBtn = document.getElementById('phone-minusBtn');
phone_minusBtn.addEventListener('click',function(){
    var phone_amount = document.getElementById('phone-amount');
    if(phone_amount.value>=1){
        phone_amount.value --;
        prizeSubtract('phone-prize',1219);
        prizeSubtract('subtotal',1219);
        prizeSubtract('total',1219);
    }
})

var case_plusBtn = document.getElementById('case-plusBtn');
case_plusBtn.addEventListener('click',function(){
    var case_amount = document.getElementById('case-amount');
    case_amount.value ++;

    prizeAdd('case-prize',59);
    prizeAdd('subtotal',59);
    prizeAdd('total',59);
})

var case_minusBtn = document.getElementById('case-minusBtn');
case_minusBtn.addEventListener('click',function(){
    var case_amount = document.getElementById('case-amount');
    if(case_amount.value>=1){
        case_amount.value --;
        prizeSubtract('case-prize',59);
        prizeSubtract('subtotal',59);
        prizeSubtract('total',59);
    }
})

function prizeAdd(id,number) {
    var currentValue = document.getElementById(id).innerText;
    var prize = parseFloat(currentValue);
    prize = prize + number;
    document.getElementById(id).innerText = prize;
}
function prizeSubtract(id,number) {
    var currentValue = document.getElementById(id).innerText;
    var prize = parseFloat(currentValue);
    prize = prize - number;
    document.getElementById(id).innerText = prize;
}

var check_out_Btn = document.getElementById('check-out-Btn');
check_out_Btn.addEventListener('click',function(){
    var shopping_cart = document.getElementById('shopping-cart');
    shopping_cart.style.display = 'none';
    var order_recive = document.getElementById('order-recive');
    order_recive.style.display = 'block';

})