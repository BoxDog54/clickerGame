 //Variables
 let clicks = 0; 
 let clicksPerSecond = 0;
 let clicksPerClick = 1;
 let clickCost = 10;
 let price1 = 10;
 let inc1 = 1;
 let inc2 = 0;
 let inc1Mult = 100;
 let inc2Mult = 100;
 let price2 = 100;
 //Click Function
 function increment() {
     clicks += clicksPerClick;
     document.getElementById("numbah").innerText = "Clicks = " + clicks;
 }
 //Automatic Click Function
 setInterval(function() {
     clicks += clicksPerSecond;
     document.getElementById("numbah").innerText = "Clicks = " + clicks;
 }, 1000) 
 //Automatic Click Purchase Function
 function buyAuto() {
     if (clicks >= price1){
         clicks = clicks - price1;
         price1 = price1 + inc1*inc1Mult
         clicksPerSecond = clicksPerSecond + inc1
         inc1 = Math.floor(inc1 + 2)
         inc1Mult = Math.floor((inc1Mult*1.6)/100)*100
         document.getElementById("numbah").innerText = "Clicks = " + clicks;
         document.getElementById("autoCPS").innerText = "CPS = " + clicksPerSecond;
         document.getElementById("buyButton").innerText = "Buy More CPS (" + price1 +" Clicks)";
         document.getElementById("valCPS").innerText = "Next CPS Value: " + (clicksPerSecond )
     } else {                
         autoPoor();
       }
 }
 //Click Multiplier Function
 function buyManual() {
     if (clicks >= price2){
         clicks = clicks - price2;
         price2 = price2 + inc2*inc2Mult
         clicksPerClick = 5 + inc2
         inc2 = inc2 + 5
         inc2Mult = Math.floor((inc2Mult*1.25)/100)*100
         document.getElementById("numbah").innerText = "Clicks = " + clicks;
         document.getElementById("manCPS").innerText = "Clicks = " + clicksPerClick;
         document.getElementById("buyButton1").innerText = "Buy More Clicks (" + price2 +" Clicks)";
         document.getElementById("clickVal").innerText = "Next Click Value: " + (5 + inc2)
     } else {
         manualPoor();
       }
 }

 //Reset Function
 function reset() {
    let confirmation = (prompt('Please type "Confirm" to reset.', ""))
    if (confirmation.toLowerCase() != "confirm") {
        alert("Invalid response.")
    } else {
        document.getElementById("numbah").innerText = "Clicks = 0";
        document.getElementById("showCPS").innerText = "";
        document.getElementById("showCPC").innerText = "";
        clicks = 0
        clicksPerSecond = 0
        clicksPerClick = 1
        inc1 = 1
        inc2 = 0
        price1 = 10
        price2 = 100
        inc2Mult = 100
        document.getElementById("buyButton").innerText = "Buy More CPS (10 Clicks)";
        document.getElementById("buyButton1").innerText = "Buy More Clicks (100 Clicks)";
        document.getElementById("valCPS").innerText = "Next CPS Value: 1"
        document.getElementById("clickVal").innerText = "Next Click Value: 5"
    }
}

 function resolveAfter2Seconds() {
     return new Promise(resolve => {
         setTimeout(() => {
         resolve('resolved');
     }, 2000);
     });
 }

 async function manualPoor() {
     document.getElementById("buyButton1").innerText = "Not Enough Clicks!"
     const result = await resolveAfter2Seconds();
     document.getElementById("buyButton1").innerText = "Buy More Clicks! (" + price2 +" Clicks)", 3500

 }

 async function autoPoor() {
     document.getElementById("buyButton").innerText = "Not Enough Clicks!"
     const result = await resolveAfter2Seconds();
     document.getElementById("buyButton").innerText = "Buy More CPS (" + price1 +" Clicks)"
 }