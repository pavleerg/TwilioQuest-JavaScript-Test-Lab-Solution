function scanAndFilter(arr,str){
    let retarr =[]
    arr.forEach(element => {
        if(element!=str){
            retarr.push(element);
        }
    });
    return retarr;
} 