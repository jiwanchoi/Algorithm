function solution(name, yearning, photo) {
  const tmp ={};
  const answer=[]  
  for(i=0; i<name.length; i++){
      tmp[name[i]] = yearning[i]
  }  
  for(i=0; i<photo.length; i++){
      let point = 0;
      for(j=0; j<photo[i].length; j++){
           point += tmp[photo[i][j]] || 0
      } answer.push(point);
  } 
    return answer 
}