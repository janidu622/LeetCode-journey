const reverseString=(str)=>{
    let restult ="";
    for(let i=str.length-1 ; i>=0 ;i--){
         restult+=str[i];
    }
    return restult;
}

console.log(reverseString("hello"))// "olleh"
// 