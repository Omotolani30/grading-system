function showResult() {
    var userCgpa = Number(document.getElementById('cgpa').value);
    // var userCgpa = Number(cgpa.value);
    var songfail = new Audio("audio/fail.mp3")
    var songpass = new Audio("audio/fail.mp3")
    var songthird = new Audio("audio/third.wav")
    var song2lower = new Audio("audio/lower.mp3")
    var song2upper = new Audio("audio/upper.wav")
    var songfirst = new Audio("audio/firstclass.wav")
     
    if (userCgpa <= 0.99) {
        document.getElementById("classification").innerHTML = `Probation &#128078;. Advise to withdraw`;
        songfail.play();
    } else if(userCgpa <= 1.49) {
        document.getElementById("classification").innerHTML = `Pass. You can do better`;
        songpass.play();
    } else if(userCgpa <= 2.39) {
        document.getElementById("classification").innerHTML = `Third Class`;
        songthird.play();
    } else if (userCgpa <= 3.49) {
        document.getElementById("classification").innerHTML = `Second Class Lower.`;
        song2lower.play();
    } else if (userCgpa <= 4.49) {
        document.getElementById("classification").innerHTML = `Second Class Upper.`;
        song2upper.play();
    } else if (userCgpa <= 5.0) {
        document.getElementById("classification").innerHTML = `Congratulations &#127881;. You got first class.`;
        songfirst.play();
    }else {
        document.getElementById("classification").innerHTML = `Invalid. Input a number between 0 and 5.0`
    }
}



function showLgrade(){
    var userGrade = Number(document.getElementById('l_grade').value);

    if (userGrade >= 70 && userGrade <= 100) {
        document.getElementById("letter_result").innerHTML = `A`;
    } else if (userGrade >= 60 && userGrade < 70) {
        document.getElementById("letter_result").innerHTML = `B`;
    } else if (userGrade >= 50 && userGrade < 60) {
        document.getElementById("letter_result").innerHTML = `C`;
    } else if (userGrade >= 40 && userGrade < 50) {
        document.getElementById("letter_result").innerHTML = `D`;
    } else if (userGrade >= 30 && userGrade < 40) {
        document.getElementById("letter_result").innerHTML = `E`;
    } else if (userGrade >=0 && userGrade < 30) {
        document.getElementById("letter_result").innerHTML = `F`;
    } else {
        document.getElementById("letter_result").innerHTML = `Invalid. Kindly input a number between 0 and 100`
    }
}