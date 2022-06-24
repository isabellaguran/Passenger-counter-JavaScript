//initialize the count as 0
//listen for clicks on increment button
//increment the count variables when the button is clicked (log it out)
//change the count-el in the HTML to reflect the new count
let countEl= document.getElementById("count-el") //we create a variable that looks into the html for the id "count-el" //also what is inside () means we pass in the argument
console.log(countEl) //we check it to verify if it shows the id from the html

let count=0
function increment(){
    console.log("clicks")
    count=count+1
    countEl.innerText=count //we modify the value in the html of the countEl that is the id count-el ,so the text inside it we want to be the count We also see it now actually the value written to our preview on the button is changed each time we press on it with the count
    console.log(count)
}
