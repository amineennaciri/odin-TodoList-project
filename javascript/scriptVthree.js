function MakeCar(carMake,carModel,carColor,numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert('beep')
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}

let hondaCivic = new MakeCar('Honda','Civic','Silver',4)
let teslaRoadster = new MakeCar('Tesla','Roadster','Red',2)


let stopWatch = {} // create object
// properties
stopWatch.brand = 'Nike'
stopWatch.smell = 'New'
stopWatch.shape = 'round'
stopWatch.color = 'black'
// methods
stopWatch.start = function(){
    console.log('running')
}
stopWatch.stop = function(){
    console.log('stop running')
}
stopWatch.morph = function(){
    console.log('Its morphin time')
}
let stopWatch = {
    // properties
    brand : 'Nike',
    smell : 'New',
    shape : 'round',
    color : 'black',
    // methods
    start : function(){
        console.log('running')
    },
    stop : function(){
        console.log('stop running')
    },
    morph : function(){
        console.log('Its morphin time')
        console.log(stopWatch.brand)
    },
}