class Dog {
    constructor(name, num){
        this._name = name;
        this._weight = num;
    }
    get name(){
        return this._name
    }
    get weight(){
        return this._weight
    }
    incrementBehaviuor(){
        this._weight++
    }
}
const myDog = new Dog("Kutta", 20)
console.log(myDog);
console.log(myDog.name);
console.log(myDog.weight);
myDog.incrementBehaviuor()
console.log(myDog.weight);


