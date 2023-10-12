console.log("RUNNING");
function CalculateSum() {
    
let Fare=document.getElementById("fare").value;
console.log(Fare);
let numOfPeople=document.getElementById("numPeople").value;
console.log(numOfPeople);
let MoneySent=document.getElementById("moneySent").value;
console.log(MoneySent);
//calculate the sum per seats
 let sum=numOfPeople*Fare;
 console.log(sum);
 let change=MoneySent-sum;
 let moneyShort=sum-MoneySent;
//console.log(change);

if(MoneySent<sum)
{
    console.log("Money is short with R" +moneyShort)
}
else{
    console.log("Change is R"+change)
}

}
