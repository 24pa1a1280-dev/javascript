<!DOCTYPE html>
<html>
<head>
    <title>Student Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f9fa;
        }
        h1 {
            color: #333;
        }
        .student-info {
            background: white;
            padding: 15px;
            border-radius: 8px;
            width: 300px;
            box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
        }
        .student-info p {
            margin: 6px 0;
        }
        .pass {
            color: green;
            font-weight: bold;
        }
        .fail {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>

<h1>Student Report</h1>
<div class="student-info" id="studentDetails"></div>

<script>
// Step 1: Declare variables
let studentName = "Alice";
let studentAge = 20;
let subjectMarks = [80, 65, 90]; // Step 2: Store marks in an array

// Step 3: Function to calculate total and average
function getTotalAndAverage(marks) {
    let total = 0;
    for (let m of marks) {
        total += m;
    }
    let average = total / marks.length;
    return { total, average };
}

let { total, average } = getTotalAndAverage(subjectMarks);

// Step 4: Store data in an object
let student = {
    name: studentName,
    age: studentAge,
    totalMarks: total,
    averageMarks: average
};

// Extra Challenge: Add grade
if (average >= 85) {
    student.grade = "A";
} else if (average >= 70) {
    student.grade = "B";
} else if (average >= 50) {
    student.grade = "C";
} else {
    student.grade = "D";
}

// Pass/Fail status
student.status = average >= 40 ? "Pass" : "Fail";

// Step 5: Display all properties
let detailsDiv = document.getElementById("studentDetails");
for (let key in student) {
    let value = student[key];
    if (key === "status") {
        detailsDiv.innerHTML += <p class="${value.toLowerCase()}"><b>${key}:</b> ${value}</p>;
    } else {
        detailsDiv.innerHTML += <p><b>${key}:</b> ${value}</p>;
    }
}
</script>

</body>
</html>
