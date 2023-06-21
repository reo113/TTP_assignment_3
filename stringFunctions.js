function reverseString(word){

  return word.split("").reverse().join("");
}

function palindrome(thing){
    if(!thing.length || thing.length ===1 ){
        return true;
    }
    let start = 0;
    let end = thing.length-1;
    while(start <= end){
        if(thing.charAt(start++) != thing.charAt(end--)){
            return false;
        }
    }
    return true;
}

const  w = reverseString("word");
//console.log("word: " +w);

const  k = palindrome("racecar");
//console.log("Is palindrome: " + k);

module.exports = {reverseString,palindrome};