/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let arr=num.split('').map(Number);

    let odd=[]
    let even=[]
    for (let i=0;i<arr.length;i++){
        if(i%2===0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }

    }
    let oddsum=odd.reduce((acc,val)=>acc+val,0)
    let evensum=even.reduce((acc,val)=>acc+val,0)
   if(oddsum===evensum){
    return true
   }else{
    return false
   }
    

};