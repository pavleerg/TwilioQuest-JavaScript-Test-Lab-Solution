class TargetingSolution{
    constructor(conf){
        this.conf=conf;
    }

    target(){
        let a="("+String(this.conf.x)+", "+String(this.conf.y)+", "+String(this.conf.z)+")";
        return a;
    }
}

const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900,
  });
  
  console.log(m.target()); // would print "(10, 15, 900)"