class Ducktypium{
    constructor(color){
        let boje=["red","blue","yellow"]
        if(boje.includes(color)==false){
            alert("error");
        }else{
            this.color=color;
            this.calibrationSequence =[];
        }
        
    }

    refract(col){
        let boje=["red","blue","yellow"];
        if(boje.includes(col)==false){
            alert("error");
        }else{
            if(col=="red" && this.color=="blue" || col=="blue" && this.color=="red"){
                return "purple";
            }else if(col=="red" && this.color=="yellow" || col=="yellow" && this.color=="red"){
                return "orange";
            }else if(col=="yellow" && this.color=="blue" || col=="blue" && this.color=="yellow"){
                return "green";
            }else{
                return this.color;
            }
        }
    }

    calibrate(arr){
        arr.sort();
        this.calibrationSequence = arr.map(item => item*3);
        return this.calibrationSequence;
    }
}


// The following would produce an error

  
  // Create a new instance of the class
  const dt = new Ducktypium("red");
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract("blue")); // prints 'purple'
  console.log(dt.refract("red")); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]