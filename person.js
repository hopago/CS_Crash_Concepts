class Person {
    constructor(name = "Hopago", Strong = 100, Smart = 100) {
        this.name = name;
        this.Strong = Strong;
        this.Smart = Smart;
    }

    static guDoc = "Dopago"

    static talk(a, b) {
        if ((a && b) instanceof Person) {
            console.log(`${a.name}과 ${b.name}의 대화...`)
        }
    }

    levelUp() {
        this.Strong++;
        this.Smart++;
        console.log(`${this.name}의 통찰력: ${this.Smart}, 힘: ${this.Smart}`)
    }
}

const aPerson = new Person();
const bPerson = new Person("도파고", 1, 1000);

aPerson.levelUp();
bPerson.levelUp();
Person.talk(aPerson, bPerson);
console.log(Person.guDoc);

export {
    Person,
    aPerson,
    bPerson,
}