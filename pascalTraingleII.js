/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/**
 * if row =0 return [1];
 * else if row index =1 return [1,1]
 * else add the adjacent numbers  and then push them in a blank array.
 * unshift 1 and push 1 to blank array
 * now arr=blank
 * blank=[];
 * repeat the above steps again
 * 
 */



 var getRow = function(rowIndex) {
    if(rowIndex===0){
    return [1];              //output [1]
}

let arr=[1,1];
if(rowIndex==1){
    return arr               //output [1,1]
}
else{
    let blank=[];

for(let j=0;j<rowIndex-1;j++){


for(let i=0;i<arr.length-1;i++){
let sum=0;

sum=arr[i]+arr[i+1];
blank.push(sum);


}
blank.unshift(1);
blank.push(1);


arr=[...blank];
blank=[];

}
}
    
return arr;

};

console.log(getRow(4));