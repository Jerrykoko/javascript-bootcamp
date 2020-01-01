/*let name = "    Gerald Oti"
console.log(name.length)
//covert to upper case
console.log(name.toUpperCase())
//convert to lower case 
console.log(name.toLowerCase())
//testing the include method
let password = " passwordnkjkjkd"
console.log(password.includes('password'))
//trim
console.log(name.trim())*/

let validpassword = function(password){
    if(password.length > 8 && !password.includes('password')){
        return true
    }else{
        return false
    }
}

console.log(validpassword('lkxn2988rnpassword'))   //false
console.log(validpassword('passjjnnfsjhssh'))      //true
console.log(validpassword('682729'))               //false

// function validPassword(password) {
//     if (password.length > 8 && !password.includes('password')){
//         return true 
//     }else{
//         return false
//     }
// }

// console.log(validPassword('lkxn2988rnpassword'))   //false
// console.log(validPassword('passjjnnfsjhssh'))      //true
// console.log(validPassword('682729')) //false

