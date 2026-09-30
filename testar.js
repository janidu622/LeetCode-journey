console.log([1,2,3].map(n=>n+1));
console.log(["a","b","c"].length);
const res =[1,2,3].forEach(n=>n*2);
console.log(res);

const arr=[4,9,2,7];
//console.log(arr.reduce((max,n)=>max>=n,0));
console.log([100,25,9].sort());

x=[1,2]; const y=[...x]; y.push(3);  console.log(x);
console.log([4,3,13,2].reduce((max,n)=>n>max? n:max ,0));
console.log([4,3,13,2].reduce((min,n)=>min>n? n:min));
