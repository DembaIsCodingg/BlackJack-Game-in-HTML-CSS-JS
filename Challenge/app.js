let sumEl = document.getElementById("sumrrr")
let cardEl = document.getElementById("carrd")
let messageEl = document.getElementById("message")
let Cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false


function startGame(){
    let firstN = getRandom()
    let secondN = getRandom()
    Cards = [firstN, secondN]
    sum = firstN + secondN
    renderGame()
}

function nCard(){
    if(isAlive == true && hasBlackJack==false){
        let cardd = getRandom()
        Cards.push(cardd)
        sum = sum + cardd
        renderGame()
    }
   
}


function renderGame(){
    if(sum < 21){
        message = "Do you want to draw another ?"
        isAlive = true
        hasBlackJack = false
    } else if (sum == 21){
        message = "BlackJack"
        isAlive=true
        hasBlackJack=true

    } else if(sum > 21){
        message = "You are out of game"
        isAlive=false
        hasBlackJack=false
    }
    messageEl.textContent = message
    cardEl.textContent = "Cards: "
    for(let i =0; i<Cards.length;i++){
        cardEl.textContent += Cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

}


function getRandom(){
    let result = Math.floor(Math.random() * 13) + 1
    if (result == 1){
        return 11
    } else if(result == 11 || result ==12|| result ==13){
        return 10
    }else{
        return result
    }
}


