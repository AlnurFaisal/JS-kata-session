function firstNonConsecutive(arr) {
    /* check in the array whether there is non-consecutive
       number and return that number
    */ 
   var num = null;
    for(var i = 0; i < arr.length; i++){
        if(arr[i + 1] !== arr[i] + 1){
            num = arr[i+1];
            return num;
        }
    }
    return num;
}


module.exports = firstNonConsecutive;