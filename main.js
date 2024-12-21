function showResult() {
    var userCgpa = Number(document.getElementById('cgpa').value);
    // var userCgpa = Number(cgpa.value);

    if(userCgpa > 5) {
        document.getElementById("classification").innerHTML = `Invalid. Please enter a CGPA between 0 and 5.`
        // classification.value = 'Invalid. Please enter a CGPA between 0 and 5.'
    }
}