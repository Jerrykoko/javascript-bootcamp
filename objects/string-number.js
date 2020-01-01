
let makeguess = function(guess) {
    let min = 1
    let max = 5
    let randomnum = Math.floor( (Math.random() * max-min + 1)) + min

    return guess === randomnum
}
console.log(makeguess(2))