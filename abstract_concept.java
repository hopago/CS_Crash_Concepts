abstract class Animal {
    public abstract void animalSound();

    public void sleep() {
        System.out.println("zzz...");
    }
}

public class abstract_concept {
    class Pig extends Animal {
        public void animalSound() {
            System.out.println("ggg...");
        }
    }

    class Dog extends Animal {
        public void animalSound() {
            System.out.println("bow...");
        }
    }
}
