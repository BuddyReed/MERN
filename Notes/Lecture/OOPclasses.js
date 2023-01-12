class Person {
    constructor(firstName, lastName, age, email) {
        // set attrubutes to be captured
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, email, major, gradeLevel) {
        super(firstName, lastName, age, email, major, gradeLevel)
        this.firstName = "Student: " + this.firstName;
        this.major = major;
        this.gradeLevel = gradeLevel;
    }
}

class Techer extends Person {
    constructor(firstName, lastName, age, email, classesTaught = []) {
        super(firstName, lastName, age, email)
        this.classesTaught = classesTaught;
    }
}

class Lecture {
    constructor(instructor, studentList, topic, zoomLink) {
        this.instructor = instructor;
        this.studentList = studentList;
        this.topic = topic;
        this.zoomLink = zoomLink;
    }

    printAttendence() {
        console.log("Welcome to " + this.instructor.fullName() + " " + this.topic + 'class');
        this.studentList.forEach(student => {
            console.log(student.fullName());
        });
    }
}


let buddy = new Person('Buddy', 'Reed', 36, 'buddy@gmail.com');
let studentbuddy = new Student('Buddy', 'Reed', 36, 'buddy@gmail.com');

let John = new Teacher('John',)

let ourLecture = new Lecture()

console.log(buddy.fullName());
console.log(studentbuddy.fullName());