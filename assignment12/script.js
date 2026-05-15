
function countStudents() {

    let i = 1;
    let whileText = "Students Present (While Loop): ";

    while(i <= 5) {

        whileText += "Student" + i + " ";

        i++;
    }

    document.getElementById("whileResult").innerHTML = whileText;


    let j = 1;
    let doText = "Students Present (Do While Loop): ";

    do {

        doText += "Student" + j + " ";

        j++;

    } while(j <= 5);

    document.getElementById("doResult").innerHTML = doText;
}
