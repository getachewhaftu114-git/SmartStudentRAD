let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    if (name === "" || id === "") {
        alert("Please fill all fields!");
        return;
    }

    let student = id + " - " + name;
    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        let li = document.createElement("li");
        li.innerHTML = student + 
        ` <button onclick="deleteStudent(${index})">❌</button>`;
        list.appendChild(li);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}