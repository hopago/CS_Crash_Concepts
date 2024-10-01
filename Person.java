public class Person {
    String name;
    int Strong;
    int Smart;

    public Person(String name, int Strong, int Smart) {
        this.name = name;
        this.Smart = Smart;
        this.Strong = Strong;
    }

    public Person() {
        this.name = "Hopago";
        this.Smart = 100;
        this.Strong = 100;
    }

    public void levelUp() {
        this.Strong = this.Strong + 1;
        this.Smart = this.Smart + 1;
        System.out.println(this.name + "의 통찰력과 힘, 증가");
    }

    private static void talk(Person a, Person b) {
        System.out.println(a.name + " & " + b.name + "의 대화 시작...");
    }

    public static void main(String[] args) {
        Person a = new Person();
        a.levelUp();

        Person b = new Person("도파고", 100, 100);
        b.levelUp();

        Person.talk(a, b);
    }
}
