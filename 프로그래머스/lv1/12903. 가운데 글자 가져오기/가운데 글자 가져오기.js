function solution(s) {
    var answer = '';
    var sliceNum = s.length/2;
    
    if(s.length % 2 == 0 ){
        return answer = s.slice(sliceNum-1, sliceNum+1);
    }else{
        return answer = s.slice(sliceNum, sliceNum+1)
    }
}