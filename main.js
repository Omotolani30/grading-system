function playAudio(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

function showResult() {
    var userCgpa = Number(document.getElementById('cgpa').value);

    // audio variables
    var songfail = "audio/fail.mp3";
    var songthird = "audio/third.wav";
    var song2lower = "audio/lower.mp3";
    var song2upper = "audio/upper.wav";
    var songfirst = "audio/firstclass.wav";

    // conditions
    if (userCgpa <= 0.99) {
        document.getElementById("classification").innerHTML = `Probation &#128078;. Advise to withdraw`;
        playAudio(songfail);
    } else if(userCgpa <= 1.49) {
        document.getElementById("classification").innerHTML = `Pass. You can do better`;
        playAudio(songfail);
    } else if(userCgpa <= 2.39) {
        document.getElementById("classification").innerHTML = `Third Class`;
        playAudio(songthird);
    } else if (userCgpa <= 3.49) {
        document.getElementById("classification").innerHTML = `Second Class Lower.`;
        playAudio(song2lower);
    } else if (userCgpa <= 4.49) {
        document.getElementById("classification").innerHTML = `Second Class Upper.`;
        playAudio(song2upper);
    } else if (userCgpa <= 5.0) {
        document.getElementById("classification").innerHTML = `Congratulations &#127881;. You got first class.`;
        playAudio(songfirst);
    }else {
        document.getElementById("classification").innerHTML = `Invalid. Input a number between 0 and 5.0`
    }
}



function showLgrade(){
    var userGrade = Number(document.getElementById('l_grade').value);

    // audio variables
    var songfail = "audio/fail.mp3";
    var songthird = "audio/third.wav";
    var song2lower = "audio/lower.mp3";
    var song2upper = "audio/upper.wav";
    var songfirst = "audio/firstclass.wav";

    // conditions
    if (userGrade >= 70 && userGrade <= 100) {
        document.getElementById("letter_result").innerHTML = `A`;
        playAudio(songfirst);
    } else if (userGrade >= 60 && userGrade < 70) {
        document.getElementById("letter_result").innerHTML = `B`;
        playAudio(song2upper);
    } else if (userGrade >= 50 && userGrade < 60) {
        document.getElementById("letter_result").innerHTML = `C`;
        playAudio(song2lower);
    } else if (userGrade >= 40 && userGrade < 50) {
        document.getElementById("letter_result").innerHTML = `D`;
        playAudio(songthird);
    } else if (userGrade >= 30 && userGrade < 40) {
        document.getElementById("letter_result").innerHTML = `E`;
        playAudio(songfail);
    } else if (userGrade >=0 && userGrade < 30) {
        document.getElementById("letter_result").innerHTML = `F`;
        playAudio(songfail);
    } else {
        document.getElementById("letter_result").innerHTML = `Invalid. Kindly input a number between 0 and 100`
    }
}

function showValue(){
    userMark = Number(document.getElementById('mark').value);

    // audio variables
    var songfail = "audio/fail.mp3";
    var songthird = "audio/third.wav";
    var song2lower = "audio/lower.mp3";
    var song2upper = "audio/upper.wav";
    var songfirst = "audio/firstclass.wav";

    // conditions
    if (userMark >= 70 && userMark <= 100) {
        document.getElementById("result").innerHTML = `Distinction`;
        playAudio(songfirst);
    } else if (userMark >= 60 && userMark < 70) {
        document.getElementById("result").innerHTML = `Merit`;
        playAudio(song2upper);
    } else if (userMark >= 50 && userMark < 60) {
        document.getElementById("result").innerHTML = `Pass`;
        playAudio(song2lower);
    } else if (userMark >= 0 && userMark < 50) {
        document.getElementById("result").innerHTML = `Fail`;
        playAudio(songfail);
    } else {
        document.getElementById("result").innerHTML = `Invalid. Kindly input a number between 0 and 100`
    }
}