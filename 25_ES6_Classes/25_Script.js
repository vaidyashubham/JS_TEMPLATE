class Person {

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    // instance Method
    print(){
        console.log(`First Name : ${this.firstName}
                     Last Name : ${this.lastName}
                     Age : ${this.age}`);
    }

    // static Method
    static  getCollege(){
        console.log('Indian School of Business');
    }
}
class Employee  extends Person{

    constructor(firstName,lastName,age,designation){
        super(firstName,lastName,age);
        this.designation = designation;
    }

    // instance Method
    print(){
        console.log(`First Name : ${this.firstName}
                     Last Name : ${this.lastName}
                     Age : ${this.age}
                     Designation : ${this.designation}`);
    }

    // static Method
    static  getCollege(){
        console.log('Indian Institute of Science, Bangalore');
    }
}

let employee = new Employee('Rajan','Jain',35,'Business Manager');
employee.print();
Employee.getCollege();