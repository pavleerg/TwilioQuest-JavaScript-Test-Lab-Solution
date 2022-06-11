function scan(array){
    let finarg=[];
    let i=-1;
    array.forEach(element => {
        i++;
        if(element=="contraband"){
            
            finarg.push(i);
        }
        });
    
        return finarg;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]