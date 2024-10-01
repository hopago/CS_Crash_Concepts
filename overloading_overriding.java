class Calculator {
    void multiply(int a, int b) {
        System.out.println("결과는 :" + (a * b) + "입니다.");
    }

    void multiply(int a, int b, int c) {
        System.out.println("결과는 " + (a + b + c) + " 입니다.");
    }

    void multiply(double a, double b) {
        System.out.println("결과는 " + (a * b) + " 입니다");
    }
}

class Person {
    void pay(String a, int b) {
        System.out.println(a + "가" + b + " 계산");
    }

    void pay(int a, String b) {
        System.out.println(b + "가 " + a + " 계산");
    }
}

class Animal {
    void eat() {
        System.out.println("EAT");
    }
}

class Person1 extends Animal {
    @Override
    void eat() {
        System.out.println("PERSON1 EAT");
    }
}

public class overloading_overriding {
    public static void main(String args[]) {
        // 오버로딩 - 인자의 순서, 타입 등을 바꿔 활용
        int a = 1;
        int b = 3;
        int c = 5;
        Calculator calc = new Calculator();

        calc.multiply(a, b);
        calc.multiply(a, b, c);

        double aa = 1.3;
        double bb = 1.5;
        calc.multiply(aa, bb);

        // 오버라이딩 - 재정의
        Person1 nP1 = new Person1();
        nP1.eat();
    }
}