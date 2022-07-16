function totalProduction(){
    event.preventDefault();
    let shedA = document.getElementById("sheda").value;
    console.log(shedA);
    // the .innerHTML embeds/atouch a text in the paragraph 
    document.getElementById("reportA").innerHTML += "Your production in  shed A  is " + shedA + " liters per day."

    let shedB = document.getElementById("shedb").value;
    console.log(shedB);
    document.getElementById("reportB").innerHTML += "Your production in  shed B is " + shedB + " liters per day."


    let shedC = document.getElementById("shedc").value;
    console.log(shedC);
    document.getElementById("reportC").innerHTML += "Your production in  shed C is " + shedC + " liters per day."

    let shedD = document.getElementById("shedd").value;
    console.log(shedD);
    document.getElementById("reportD").innerHTML += "Your production in  shed D is " + shedD + " liters per day."

}
