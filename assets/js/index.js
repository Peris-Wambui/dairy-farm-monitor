function totalProduction() {
    event.preventDefault();
    let shedA = parseInt(document.getElementById("sheda").value);
    console.log(shedA);
    // the .innerHTML embeds/atouch a text in the paragraph 
    document.getElementById("reportA").innerHTML += "Your production in  shed A  is " + shedA + " liters per day."

    let shedB = parseInt(document.getElementById("shedb").value);
    console.log(shedB);
    document.getElementById("reportB").innerHTML += "Your production in  shed B is " + shedB + " liters per day."


    let shedC = parseInt(document.getElementById("shedc").value);
    console.log(shedC);
    document.getElementById("reportC").innerHTML += "Your production in  shed C is " + shedC + " liters per day."

    let shedD = parseInt(document.getElementById("shedd").value);
    console.log(shedD);
    document.getElementById("reportD").innerHTML += "Your production in  shed D is " + shedD + " liters per day."

    let totalDailyLiters = shedA + shedB + shedC + shedD;
    console.log(totalDailyLiters);
    document.getElementById("dailySum").innerHTML += "The total production is " + totalDailyLiters + " litres per day."

    let daysIncome = totalDailyLiters * 45;
    let weeklyIncome = daysIncome * 7;
    console.log(weeklyIncome);
    document.getElementById("weeklyIncome").innerHTML += "Your weekly income will be Ksh " + weeklyIncome

    let januaryIncome = totalDailyLiters * 45 * 31;
    console.log(januaryIncome);
    document.getElementById("januaryIncome").innerHTML += "Your income for January is Ksh " + januaryIncome

    let februaryIncome = totalDailyLiters * 45 * 29;
    console.log(februaryIncome);
    document.getElementById("februaryIncome").innerHTML += "Your income for february is Ksh " + februaryIncome

    let marchIncome = totalDailyLiters * 45 * 29;
    console.log(marchIncome);
    document.getElementById("marchIncome").innerHTML += "Your income for march is Ksh " + marchIncome


    let aprilIncome = totalDailyLiters * 45 * 29;
    console.log(aprilIncome);
    document.getElementById("aprilIncome").innerHTML += "Your income for april is Ksh " + aprilIncome

    let mayIncome = totalDailyLiters * 45 * 29;
    console.log(mayIncome);
    document.getElementById("mayIncome").innerHTML += "Your income for may is Ksh " + mayIncome

    let juneIncome = totalDailyLiters * 45 * 29;
    console.log(juneIncome);
    document.getElementById("juneIncome").innerHTML += "Your income for june is Ksh " + juneIncome

    let julyIncome = totalDailyLiters * 45 * 29;
    console.log(julyIncome);
    document.getElementById("julyIncome").innerHTML += "Your income for july is Ksh " + julyIncome

    let augustIncome = totalDailyLiters * 45 * 29;
    console.log(augustIncome);
    document.getElementById("augustIncome").innerHTML += "Your income for august is Ksh " + augustIncome

    let septemberIncome = totalDailyLiters * 45 * 29;
    console.log(septemberIncome);
    document.getElementById("septemberIncome").innerHTML += "Your income for september is Ksh " + septemberIncome 

    let octoberIncome = totalDailyLiters * 45 * 29;
    console.log(octoberIncome);
    document.getElementById("octoberIncome").innerHTML += "Your income for october is Ksh " + octoberIncome

    let novemberIncome = totalDailyLiters * 45 * 29;
    console.log(novemberIncome);
    document.getElementById("novemberIncome").innerHTML += "Your income for november is Ksh " + novemberIncome

    let decemberIncome = totalDailyLiters * 45 * 29;
    console.log(decemberIncome);
    document.getElementById("decemberIncome").innerHTML += "Your income for december is Ksh " + decemberIncome

    let yearlyIncome = januaryIncome + februaryIncome + marchIncome + aprilIncome + mayIncome + juneIncome + julyIncome + 
                        augustIncome + septemberIncome + octoberIncome + novemberIncome + decemberIncome 
    console.log(yearlyIncome);
    document.getElementById("yearlyIncome").innerHTML += "Your yearly income will be Ksh"  + yearlyIncome

    

}
