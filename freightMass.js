function calculateMass(arr){

var mass = arr.reduce((sum, current) => sum + current.length, 0);

 return mass;
}

const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // should be 12