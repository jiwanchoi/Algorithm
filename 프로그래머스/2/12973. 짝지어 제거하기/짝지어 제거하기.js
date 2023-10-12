function solution(s){
    const str = [];
    
    for(let i = 0; i<s.length; i++){
        if(str[str.length-1]===s[i]){
            str.pop();
        } else{
            str.push(s[i]);
        }   
    }
    
    return str.length===0?1:0;
}