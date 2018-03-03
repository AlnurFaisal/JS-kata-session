function findMultiples(int, limit){
    /* we need to find the multiple of the integer 
       but we also must make sure it does not exceed its limit 
    */ 
   // build a list of numbers i can multiply the integer with and cannot be 0
    var numList = [];
    var num = null;
    for(var i = 0; i < limit; i++){
        /* while building the numList, we check if the number supplied 
           multiply the integer is bigger than its limit
        */
        num = (i + 1) * int;  
        if(num <= limit){
            numList[i] = num;
        } else{
            break;
        }
    }
    return numList;
}


module.exports = findMultiples;