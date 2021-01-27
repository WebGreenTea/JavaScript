class Dog{
    constructor(name){
        this._name = name;
    }

    introduce(){
        console.log("This is "+ this._name + " !");
    }

    static bark(){
        console.log("Woof!");
    }
}

const MyDog = new Dog("Buster");
MyDog.introduce();

const MyDog2 = new Dog("Pluto");
MyDog2.introduce();

Dog.bark();
