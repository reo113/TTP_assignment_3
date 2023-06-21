//Takes a string str and returns the reversed string.
function reverseString(word){

  return word.split("").reverse().join("");
}
//Takes a string str and returns true if the string is a palindrome. Otherwise, it returns false.
function palindrome(thing){
    if(!thing.length || thing.length ===1 ){
        return true;
    }
    let start = 0;
    let end = thing.length-1;
    //while the start is less than or equal to the end, check if the start and end characters are the same
    while(start <= end){
        if(thing.charAt(start++) != thing.charAt(end--)){
            return false;
        }
    }
    return true;
}

const  w = reverseString("word");


const  k = palindrome("racecar");


module.exports = {reverseString,palindrome};