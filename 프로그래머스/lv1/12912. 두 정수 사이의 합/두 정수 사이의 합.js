function solution(a, b) {
    var sum = 0;
    if(a>=b){
        for(let i = b; i<=a; i++){
            sum+= i;
        }
    }else{
        for(let j = a; j<=b; j++){
            sum+= j;
        }
    }
    return sum;
}