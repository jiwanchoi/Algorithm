function solution(s) {
    var answer = 0;
    let str = String(s);
    
    if(str.includes('+')){
        return parseInt(str.substr(1));
    }
    else{
        return parseInt(str);
    }
}