const cardArray = [
    {
        name:'pink',
        img: 'images/pink.png'
    },
    {
        name:'blue',
        img: 'images/blue.png'
    },
    {
        name:'green',
        img: 'images/green.png'
    },
    {
        name:'red',
        img: 'images/red.png'
    },
    {
        name:'brown',
        img: 'images/brown.png'
    },
    {
        name:'yellow',
        img: 'images/yellow.png'
    },
    {
        name:'pink',
        img: 'images/pink.png'
    },
    {
        name:'blue',
        img: 'images/blue.png'
    },
    {
        name:'green',
        img: 'images/green.png'
    },
    {
        name:'red',
        img: 'images/red.png'
    },
    {
        name:'brown',
        img: 'images/brown.png'
    },
    {
        name:'yellow',
        img: 'images/yellow.png'
    },
];

let cardsWon = 0, misclicks = 0
const chosenCards = [],  chosenCardsID = []
const gridDisplay = document.querySelector('#grid');
const score = document.querySelector('#result')
const restartButton = document.querySelector('#restart')
restartButton.addEventListener('click',start)

start()

function start(){
    cardsWon = 0
    misclicks = 0
    cardArray.sort(() => 0.5 - Math.random());
    score.textContent = '0'
    chosenCards.length = 0
    chosenCardsID.length = 0
    gridDisplay.innerHTML = ''

    createBoard();
}



function createBoard(){
    for(let i = 0; i < cardArray.length ;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/back.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('img') 
    if(chosenCards[0] !== chosenCards[1]){
        cards[chosenCardsID[0]].setAttribute('src','images/back.png')
        cards[chosenCardsID[1]].setAttribute('src','images/back.png')
        
        score.textContent = ++misclicks
    }
    else{
        cards[chosenCardsID[0]].removeEventListener('click',flipCard)
        cards[chosenCardsID[1]].removeEventListener('click',flipCard)
        cardsWon++
        if(cardsWon*2 === cardArray.length){
            alert('Great Job!')
        }
    }
    chosenCards.pop()
    chosenCards.pop()
    chosenCardsID.pop()
    chosenCardsID.pop()
}

function flipCard(){
    const cardID = this.getAttribute('data-id')
    chosenCards.push(cardArray[cardID].name)
    chosenCardsID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if(chosenCards.length === 2){
        setTimeout(checkMatch, 500)
    }
    console.log(cardArray[cardID].name)
    console.log(cardID, 'clicked')
    console.log(chosenCards)
    console.log(chosenCardsID)
}
