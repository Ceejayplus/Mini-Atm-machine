var balance = 1000
        
function withdraw(){
    var amountEntered = Number(userInput.value)
    if(amountEntered>balance){
        topScreen.innerText = "INSUFFICIENT FUND 🤕"
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "red"
        topScreen.style.fontWeight = "700"
    }
    else if(amountEntered==""){
        topScreen.innerText = "KINDLY ENTER AN AMOUNT ?"
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "red"
        topScreen.style.fontWeight = "700"
    }
    else if(amountEntered<0){
        topScreen.innerText = "OUT OF BOUND 😠"
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "red"
        topScreen.style.fontWeight = "700"
    }
    else if(balance = balance - amountEntered){
        topScreen.innerText =  `Withdrawal Successful and your current balance is $ ${balance} 😊`
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "white"
        topScreen.style.fontWeight = "700"
    }
    else{
        topScreen.innerText =  "INVALID INPUT 👿"
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "red"
        topScreen.style.fontWeight = "700"
    }
}
function deposit(){
    var amountEntered = Number(userInput.value)
    if(amountEntered < 0){
        topScreen.innerText = "AM I A JOKE TO YOU 👿"
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "red"
        topScreen.style.fontWeight = "700"
    }
    else if(amountEntered==""){
        topScreen.innerText = "KINDLY ENTER AN AMOUNT ?"
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "red"
        topScreen.style.fontWeight = "700"
    }
    else if(balance = amountEntered + balance){
        topScreen.innerText =  `Deposit Successful and your current balance is $ ${balance} 😊`
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "white"
        topScreen.style.fontWeight = "700"
    }
    else{
        topScreen.innerText =  "INVALID INPUT 👿"
        topScreen.style.fontSize = "30px"
        topScreen.style.color = "red"
        topScreen.style.fontWeight = "700"
    }
}
function checkBalance(){
    topScreen.innerText = "Your account balnace is $ " + balance
    topScreen.style.fontSize = "30px"
    topScreen.style.color = "white"
    topScreen.style.fontWeight = "700"
}