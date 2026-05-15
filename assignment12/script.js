
function showNumbers() {

    // While Loop
    let i = 1;
    let whileText = "While Loop: ";

    while(i <= 5) {
        whileText += i + " ";
        i++;
    }

    document.getElementById("whileResult").innerHTML = whileText;


    // Do While Loop
    let j = 1;
    let doText = "Do While Loop: ";

    do {
        doText += j + " ";
        j++;
    } while(j <= 5);

    document.getElementById("doResult").innerHTML = doText;
}
