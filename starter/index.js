var finances = [
  ['Jan-2010', 867884],  // Feb - jan 
  ['Feb-2010', 984655], // Mar - Feb  
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


console.log("financial Analysis");
console.log("---------------------------");

//Total number of months included in the dataset

console.log("totalMonths:" + finances.length);

//figured out the numbers of rows in the finance variable.
//The next total amount of profit/losses over the entire period.
//sum everything together
//For loop

var netTotalAmount = 0;
var totalChangeAmount = 0;
var changes = [];

for (i = 0; i < finances.length; + i++)
{netTotalAmount += finances[i][1]

if (i !=0 ){
  //Change working shown here
  var currentChange = finances[i][1] - finances[i-1][1];
  changes.push(currentChange);
  totalChangeAmount += currentChange
}

}

console.log("total:$" + netTotalAmount)

//The average of the changes profit/losses over the entire period.
//calculate each average change by substracting previous month from current month

console.log("Average change:$" + totalChangeAmount/(finances.length - 1))







  






/* totalMonths = finances.length
console.log(totalMonths)


var totalMonthlyChange = 0

for (i = 0; i < finances.length; i++) {

 var currentMonth = finances[i][1]
 var nextMonth = finances[i+1]

 if (nextMonth){
  totalMonthlyChange += finances[i+1][1] - currentMonth
 }

}
console.log(totalMonthlyChange / (totalMonths - 1))
*/


// The net total amount of Profit/Losses over the entire period to be determined




/* 
Create variable for each requirements ,
create a for loop for iteration of Array for total months
increment on each months by i++



Var totalMonths = 0, profitLoss = 0, averageChange = 0, minChange = 0, maxChange = 0

var lastMonthValue = 0 
var monthlyChanges = []
//create a for loop to iterate over the array

for (let i = o, i < finances.length; i++) {
  //on each iteration
  //increment months by 1 , add or substract the value from our total
  totalMonths++

  var currentValue = finances[i][1]
      totalProfitLoss += currentValue

      var monthlyChange = Math.abs(currentValue - lastMonthValue)

      if (currentValue + lastMonthValue < 0) monthlyChange *= -1

       monthlyChanges.push(monthlyChange)
      


      

//check if the current value is the greatest or smallet value we ve seen so far


}

console.log("monthly changes", monthlyChanges)

for (let i = 0; i < monthlyChanges.length; i++){
  var monthlyChange = monthlyChanges[i]

  if (monthlyChange > maxChange) maxChange = monthlyChange
if   (monthlyChange < minChange) minChange = monthlyChange

  averageChange += monthlyChange

}


//after the loop divide total profit/loss by total number of months to calcuate the average

// averageChange + totalProfitLoss / totalMonths

console.log("Total Months: " + totalMonths)
console.log("Total Profit/loss: " + totalProfitLoss)
console.log("Average Change: " + (averageChange / totalMonths).toFixed(2))
console.log("Greatest Increase: " + maxChange)
console.log("Greatest Decrease: " + minChange)
*/