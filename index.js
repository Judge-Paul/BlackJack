// images organized in an array from index 1 - 13 and index[0] is empty so the function takes just the numbers 
const cardImages = [
    "nothing",
    "card-images/ace.svg",
    "card-images/2.svg",
    "card-images/3.svg",
    "card-images/4.svg",
    "card-images/5.svg",
    "card-images/6.svg",
    "card-images/7.svg",
    "card-images/8.svg",
    "card-images/9.svg",
    "card-images/10.svg",
    "card-images/jack.svg",
    "card-images/queen.svg",
    "card-images/king.svg"
]
// image variable to display the image cards
let imgCont = document.getElementById("img-card")
let player = {
    name: "Paul",
    chips: "$300"
}
let cards = []
let sum = 0
let imageNum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let actualNumbers = []
playerEl.textContent = player.name + ": " + player.chips
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    actualNumbers.push(randomNumber)
    console.log(actualNumbers)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
        imageNum + 1
    } else {
        return randomNumber
    }
}

function startGame() {
    actualNumbers.length = 0
    if (!isAlive || hasBlackJack) {
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
    else {
        messageEl.textContent = 'You are already playing'
    }
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    function renderImage(images) {
    let imgsDOM = ""
    for (let i = 0; i < actualNumbers.length; i++){
        imgsDOM += `<img src="${cardImages[actualNumbers[i]]}">`
    }
    imgCont.innerHTML = imgsDOM
    }
    renderImage(cardImages)
}


function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}