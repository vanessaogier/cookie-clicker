let cookieCount = 0;
let multiplierCost = 50;
let multiCount = 1;
let autoclickCost = 200;
let autoclickOn = false;
let autoclickCount = 0;
let bonusCost = 1000;
let bonusButton = document.getElementById("bonusButton");
let cookie = document.getElementById("cookie");
let countElement = document.getElementById("Count");
let multiplicateur = document.getElementById("multiplier");
let autoClick = document.getElementById("autoclick");
cookie.addEventListener("click", click);
countElement.addEventListener("click", click);
multiplicateur.addEventListener("click", augmenterMultiplicateur);
autoClick.addEventListener("click", cost);
bonusButton.addEventListener("click", bonus);

setInterval(autoclickActif, 1000);
setTimeout (bonus, 30000);
function click() {
  countElement.innerHTML = cookieCount += multiCount;
  multiplicateur.innerHTML =
    "multiple de " + multiCount + "prix du multiplicateur " + multiplierCost;
console.log(cookieCount);
console.log(multiCount);
}
function augmenterMultiplicateur() {
  // multiCount++;
  //multiplicateur.innerHTML = multiCount;

if(cookieCount >= multiplierCost) {
    cookieCount = cookieCount - multiplierCost;
    multiplierCost = multiplierCost * 2;
    multiCount++;
    multiplicateur.innerHTML =
      "multiple de " +
      multiCount +
      "prix du prochain multiplicateur : " +
      multiplierCost +
      " cookies";
    return multiplierCost;
  }

}
function cost(){
    if(cookieCount>=autoclickCost) {
   cookieCount = cookieCount - autoclickCost;
   autoclickCost = autoclickCost*2;
   autoclickCount++;
   autoClick.innerHTML = "autoclick désactivé";
   return autoclickCost
   }
   }


function autoclickActif() {
console.log (autoclickCount);
cost();
cookieCount =cookieCount + autoclickCount;

countElement.innerHTML = cookieCount;

    }
    function bonus() {
        console.log (bonusButton);
        if (cookieCount >= bonusCost){
            cookieCount = cookieCount * 2;
            autoClick.innerHTML
        }

        
    
    }
    function bonusEnd () {
        clearTimeout (bonus());
    }
  
 


