function showResult() {
    var userCgpa = Number(document.getElementById('cgpa').value);
    // var userCgpa = Number(cgpa.value);
    var songfail = new Audio("audio/fail.mp3")
    var songpass = new Audio("audio/fail.mp3")
    var songthird = new Audio("audio/third.wav")
    var song2lower = new Audio("audio/lower.mp3")
    var song2upper = new Audio("audio/upper.wav")
    var songfirst = new Audio("audio/firstclass.wav")

    if (isNaN(userCgpa) || userCgpa < 0 || userCgpa > 5) {
        document.getElementById("classification").innerHTML = `Invalid. Please enter a CGPA between 0 and 5.`;
    }
     
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
    }
}



function showLgrade(){
    var userGrade = Number(document.getElementById('l_grade')).value;

    if(isNaN(userGrade) || userGrade < 0 || userGrade > 100){
        document.getElementById("letter_result").innerHTML = `Invalid. Please enter a number between 0 and 100.`;
    }

    if (userGrade <= ) {
        
    }
    
}