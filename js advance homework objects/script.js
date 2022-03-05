function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;

    this.printStudents = function () {
        this.students.forEach(student => console.log(student));
    }

    this.printSubjects = function () {
        this.subjects.forEach(subject => console.log(subject));
    };
}

let academy = new Academy("Code Academy", ["Adis", "Erika"], ["HTML & CSS", "JS Basic", "JS Advance"], 2000, 2002);
// console.log(academy);



function Subject(title, isElective, academy, students, overrideClasses) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.numberOfClasses = 10;
    this.numberOfClasses = (overrideClasses < 3) ? this.numberOfClasses : overrideClasses;
}

let newSubject = new Subject("HTML & CSS", true, academy, ["Adis", "Erika"], 7);
//console.log(newSubject);

function Student(fName, lName, age, startAcademy, startSubject) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.completedSubject = [];
    this.academy = null;
    this.currentSubject = null;
    this.academy = startAcademy;
    this.startSubject = startSubject;

    this.startStudentAcademy = function () {
        this.academy.students.push(this.fName);
        console.log(`The new arrey of the academy :`, this.academy)
    };

    this.doSubjectsMatch = (this.academy != null && findMatchingSubjects(this.startSubject, this.academy));
    this.currentSubject = this.doSubjectsMatch ? startSubject : console.error("The subject doesn't exist!!!!");

    this.startStudentSubject = function () {
        if (!this.doSubjectsMatch) {
            console.error("The subject doesn't exist!!!!");
            return;
        }

        this.startSubject.students.push(this.fName);
        console.info(`Start subject students: `, this.startSubject);
    }
}

function findMatchingSubjects(startSubject, academy) {
    let subjectsMatch = false;
    academy.subjects.forEach(subjcet => {
        if (subjcet.toLowerCase() === startSubject.title.toLowerCase()) {
            subjectsMatch = true;
        }
    })

    return subjectsMatch;
}

let student = new Student("Bob", "Bobski", 22, academy, newSubject);
console.log(student);

student.startStudentAcademy();
student.startStudentSubject();

