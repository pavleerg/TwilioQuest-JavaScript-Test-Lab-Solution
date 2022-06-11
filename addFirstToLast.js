function addFirstToLast(arr){
    let a = "";
    if(arr.length>0){
        a=arr[0]+arr[arr.length-1];
    }
    return a;
}

console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));