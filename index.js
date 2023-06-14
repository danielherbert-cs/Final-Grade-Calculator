function calcFinalExam() {
    var currentGrade = document.getElementById("cG").value;
    var goalGrade = document.getElementById("gG").value;
    var finalExam = document.getElementById("exam").value;

    var gradeNeeded = (currentGrade * (1 - (finalExam * 0.01)));
    gradeNeeded = goalGrade - gradeNeeded;
    gradeNeeded = (gradeNeeded/finalExam) * 100;
    gradeNeeded = Math.round(gradeNeeded * 100) / 100;

    if (gradeNeeded < 50) {
        alert("Wow, you really worked hard this semester. You only need " + gradeNeeded + "% on the final exam. Congrats!🥳");
    }

    else if (gradeNeeded >= 50 && gradeNeeded < 80 ) {
        alert("You got this. You just need " + gradeNeeded + "% on the final exam to meet your goal.");
    }

    else if (gradeNeeded >= 80 && gradeNeeded <= 100) {
        alert("Time to hit the books! You will need " + gradeNeeded + "% on the final exam. Good luck!");
    }

    else if (gradeNeeded > 100) {
        alert("Best of luck next time... You will need " + gradeNeeded + "% on the final.");
    }

    else {
        alert("An error has occurred. Please ensure you are inputting numbers only.");
    }

}