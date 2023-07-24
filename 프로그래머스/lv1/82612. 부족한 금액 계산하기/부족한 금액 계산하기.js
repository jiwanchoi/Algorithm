function solution(price, money, count) {
    var totalPrice = 0;
    for(var i = 0; i <= count; i++){
        totalPrice += price * i;
    }
    return totalPrice > money ? totalPrice -= money : 0;
}