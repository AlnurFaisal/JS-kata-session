function listFiltering(arr){
    // check if array has strings
    var myList = [];
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "string"){
            myList[counter] = arr[i];
            counter++; 
        }
    }

    return myList;
}

module.exports = listFiltering;