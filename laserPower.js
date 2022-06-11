function calculatePower(array){
    var mass = array.reduce((sum, current) => sum + 2*current, 0);

 return mass;
}
