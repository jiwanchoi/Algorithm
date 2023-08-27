function solution(sizes) {
    let bigSize =0;
    let smallSize = 0;
 
    for(let i=0 ; i < sizes.length ; i++){
        let tempBig;
        let tempSmall;
        sizes[i][0] >= sizes[i][1] ?
            (tempBig = sizes[i][0] , tempSmall = sizes[i][1])
            :
            (tempBig = sizes[i][1], tempSmall = sizes[i][0])
        
        if(tempBig > bigSize ){
            bigSize = tempBig;
        }
        if(tempSmall > smallSize){
            smallSize = tempSmall;    
        }
    }
    return bigSize * smallSize;
}