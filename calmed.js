const vowel = (str)=>{
 
    const arr = ['a','e','i','o','u'];
    let count=0;
    for(let i=0;i<str.length;i++){
       const sim = str[i].toLowerCase();
       if(arr.includes(sim)){
        count++;
       }

    }
    return count;


}
console.log(vowel("hEegii"));