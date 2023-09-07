function solution(a, b) {
  let day = "2016-" + a + "- " + b;
  let date = new Date(day)
  return String(date).substr(0,3).toUpperCase();
}