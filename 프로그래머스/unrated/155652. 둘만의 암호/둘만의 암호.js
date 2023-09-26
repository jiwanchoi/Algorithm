function solution(s, skip, index) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(alphabet => !skip.includes(alphabet));

  return s.split("").map((x) => alphabet[(alphabet.indexOf(x) + index) % alphabet.length]).join("");
}