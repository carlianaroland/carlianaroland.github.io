let answers = [];

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    let firstNum = prompt("First number: ");
    if (firstNum == null) break; 

    let secNum = prompt("Second number: ");
    if (secNum == null) break;

    let opChoice = prompt("Choose Operator (+, -, *, /, %): ");
    if (opChoice == null) break;

    let ans;
    let fNum = parseFloat(firstNum);
    let sNum = parseFloat(secNum);

    if (isNaN(fNum) || isNaN(sNum)) { 
        ans = "wrong input number"; 
    } else {
        if (opChoice == "+") ans = fNum + sNum;
        else if (opChoice == "-") ans = fNum - sNum;
        else if (opChoice == "*") ans = fNum * sNum;
        else if (opChoice == "/") ans = fNum / sNum;
        else if (opChoice == "%") ans = fNum % sNum;
        else ans = "computation error";
    }

    if (typeof ans === "number") { 
        answers.push(ans); 
    }

    document.write("<tr><td>"+firstNum+"</td><td>"+opChoice+"</td><td>"+secNum+"</td><td>"+ans+"</td></tr>");
} 

document.write("</table>");

if (answers.length > 0) {
    let min = Math.min(...answers);
    let max = Math.max(...answers);
    let total = answers.reduce((a, b) => a + b, 0);
    let avg = total / answers.length;

    document.write("<h3>Summary Table</h3>");
    document.write("<table>");
    document.write("<table><tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>"+min+"</td><td>"+max+"</td><td>"+avg.toFixed(2)+"</td><td>"+total+"</td></tr>");
    document.write("</table>");
}

