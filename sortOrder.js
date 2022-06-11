const ar1 = process.argv[2];
const ar2 = process.argv[3];

if(ar1.toLowerCase() == ar2.toLowerCase()){
    console.log(0);
}else if(ar1>ar2){
    console.log(1);
}else{
    console.log(-1);
}