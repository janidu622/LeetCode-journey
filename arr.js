const mark = (score)=>{
  if(score>100 || score<0){
    return "invalid";

  }
  if(score>=90){
    return "very good";
  }
  return "fail";



}
console.log(mark(9),mark(95));//

//fizzbuz

 const fizzbuzz =(n)=>{
    const arr=[];
    for(i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
             arr.push("fizzbuzz");
        }else if(i%3===0){
             arr.push("fizz");
        }else if(i%5===0){
             arr.push("buzz");
        }else{
            arr.push(i);
        }
    }return arr;
 }
 console.log(fizzbuzz(4));





const countVowels=(text)=>{

    const arr = ['a','e','i','o','u'];
    let count=0;
    for(let i=0;i<text.length ;i++){
        const final = text[i].toLowerCase();
        if(arr.includes(final)){
            count++ ;
        }
    }return count;
}



console.log(countVowels("JavaScript")); // 3
countVowels("HELLO");      // 2
countVowels("");           // 0



const getLargest= (arr)=>{
    if(arr.length===0){
        return null;
    }
    let max= arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }return max;
}






console.log(getLargest([3, 9, 2]));   // 9
getLargest([-8, -2, -5]); // -2
getLargest([]);          // null



const users = [
  { name: "Amal", active: true },
  { name: "Nimali", active: false },
  { name: "Sara", active: true }
];
const arru = (users)=>users.active===true;

// Expected: ["Amal", "Sara"]