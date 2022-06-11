function scan(arr){
    var br=0;
    arr.forEach(element => {
        if(element=="contraband"){
            br++;
        }
        
    });

    return br;
}