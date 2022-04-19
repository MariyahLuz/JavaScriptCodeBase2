function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    if(score >25 && score <=35){
        grade="A";
    }
    else if(score >20 && score <=25){
        grade="B";
    }
    else if(score >15 && score <=25){
        grade="C";
    }
    else if(score >10 && score <=15){
        grade="D";
    }
     else if(score >5 && score <=10){
        grade="E";
    }
     else if(score >0 && score <=5){
        grade="F";
    }
    else {
        console.log("Unknown grade")
    }
    
    return grade;
}

console.log(getGrade(11))
