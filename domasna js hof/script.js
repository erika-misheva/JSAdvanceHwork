
// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

let printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log("Request is sent!");
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Request successful!");
            let objectResponse = JSON.parse(xhr.response);
            studentAvarageGrade3(objectResponse);
            femaleStudentAvarage5(objectResponse);
            maleAdultStudentsSkopje(objectResponse);
            avarageGradeOfFemalesOver24(objectResponse);
            malesnamesStartingWithBAndGradeOver2(objectResponse);
        } else {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd10-04-ajs/main/G4/Class06/homework/students.json");
    xhr.send();

});

function studentAvarageGrade3(students) {
    let unorderdList1 = document.getElementById("list1");
    const studentAvarageMoreThan3 = students.filter(student => student.averageGrade > 3)
    studentAvarageMoreThan3.forEach(student => {
        unorderdList1.innerHTML += `<li> ${student.firstName} ${student.lastName} ,avarage Grade: ${student.averageGrade}</li>`;
    });
}
function femaleStudentAvarage5(students) {
    let unorderdList2 = document.getElementById("list2");
    let femaleStudentsAvarageGrade5 = students.filter(student => student.gender === "Female" && student.averageGrade === 5)
    femaleStudentsAvarageGrade5.forEach(student => {
        unorderdList2.innerHTML += `<li> ${student.firstName} ${student.lastName} ,avarage Grade: ${student.averageGrade}</li>`
    });
}

function maleAdultStudentsSkopje(students) {
    let unorderdList3 = document.getElementById("list3");
    let maleAdultStudents = students.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18);
    maleAdultStudents.forEach(student => {
        unorderdList3.innerHTML += `<li> ${student.firstName} ${student.lastName} ,City: ${student.city} and is ${student.age} years old</li>`
    })
}
function avarageGradeOfFemalesOver24(students) {
    let unorderdList4 = document.getElementById("list4");
    const femaleStudents = students.filter(student => student.gender === "Female" && student.age > 24);
    const avarageGradeOfTheFemales = femaleStudents.reduce((total, student) => {
        return total += student.averageGrade;
    }, 0);
    unorderdList4.innerHTML = `<li>The average grades of all female students over the age of 24 is ${avarageGradeOfTheFemales}</li>`

}

function malesnamesStartingWithBAndGradeOver2(students) {
    let unorderdList5 = document.getElementById("list5");
    const maleStudents = students.filter(student => (student.firstName.startsWith("B") && student.averageGrade > 2));
    maleStudents.forEach(student => {
        unorderdList5.innerHTML += `<li> ${student.firstName} ${student.lastName} ,avarage Grade: ${student.averageGrade}</li>`;
    });
}





