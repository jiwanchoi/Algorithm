function solution(k, score) {
    const honor = []
    const result = []
    
    score.forEach((e)=>{
        honor.push(e);
        honor.sort((a,b)=>b-a);
        if(honor.length>=k){
            result.push(honor[k-1]);
        }else{
            result.push(honor[honor.length-1]);
        }
    })
    return result;
}