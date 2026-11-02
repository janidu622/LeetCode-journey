const isPalindrome=(str)=>{
    const string =  str.toLowerCase();
    for(let i=0;i<string.length/2;i++){
        if(string[i]!==string[string.length-1-i]){
              return false;
        }
    }
    return true;

}
console.log(isPalindrome("Racecar"));








 /* true
isPalindrome("hello")    // false
isPalindrome("")   */    // true