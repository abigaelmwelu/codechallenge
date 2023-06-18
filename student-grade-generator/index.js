let grade;
function studentMarks(){
    const marksPrompt = prompt ("enter marks;")//prompts the teacher to enter the marks
    const marks = marksPrompt
    if (marks < 0 || marks > 100) {
        return "Error: Marks should be between 0 and 100";
    } else if (marks > 79) {
        grade = "A";
    } else if (marks > 59) {
        grade = "B";
    } else if (marks > 49) {
        grade = "C";
    } else if (marks > 39) {
        grade = "D";
    } else {
        grade = "E";
    }
    
    console.log(grade);
    return grade;
}
console.log (studentMarks()) 

