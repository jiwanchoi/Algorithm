function solution(my_string) {
    return [...my_string].filter(a => parseInt(a)).reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)
}