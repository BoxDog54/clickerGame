let clicks = 0; 
let clicksPerSecond = 0;
let clicksPerClick = 1;
let clickCost = 10;
let price1 = 10;
let inc1 = 1;
let inc2 = 4;
let price2 = 100;

function increment() {
	clicks += clicksPerClick;
    document.getElementById("numbah").innerText = "Clicks = " + clicks;
}


setInterval(function() {
	clicks += clicksPerSecond; 
	
	document.getElementById("numbah").innerText = "Clicks = " + clicks; 
}, 1000) 

function reset() {
    document.getElementById("numbah").innerText = "Clicks = 0";
    document.getElementById("showCPS").innerText = "";
    clicks = 0
    clicksPerSecond = 0
    inc1 = 1
    price1 = 10
    document.getElementById("buyButton").innerText = "Buy More CPS (10 Clicks)";
    document.getElementById("buyButton1").innerText = "Buy More CPS (100 Clicks)";
    document.getElementById("valCPS").innerText = "Next CPS Value: 1"
    document.getElementById("clickVal").innerText = "Next Click Value: 5"
}

function buyAuto() {
    if (clicks >= price1){
        clicks = clicks - price1;
        price1 = price1 + inc1*20
        clicksPerSecond = clicksPerSecond + inc1
        inc1 = inc1 + 1
        document.getElementById("numbah").innerText = "Clicks = " + clicks;
        document.getElementById("showCPS").innerText = "CPS = " + clicksPerSecond;
        document.getElementById("buyButton").innerText = "Buy More CPS (" + price1 +" Clicks)";
        document.getElementById("valCPS").innerText = "Next CPS Value: " + (clicksPerSecond + inc1)
    } else (alert("Not enough clicks!!"))
}

function buyManual() {
    if (clicks >= price2){
        clicks = clicks - price2;
        price2 = price2 + inc2*100
        clicksPerClick = clicksPerClick + inc2
        inc2 = inc2 + 5
        document.getElementById("numbah").innerText = "Clicks = " + clicks;
        document.getElementById("showCPC").innerText = "Clicks = " + clicksPerClick;
        document.getElementById("buyButton1").innerText = "Buy More Clicks (" + price2 +" Clicks)";
        document.getElementById("clickVal").innerText = "Next Click Value: " + (clicksPerClick + inc2)
    } else (alert("Not enough clicks!!"))
}

setInterval(function() {
	if(clicks > 1000000){
        document.getElementById("main").innerText = "Congratulations!! You Win!"
    } 
}, 1000) 