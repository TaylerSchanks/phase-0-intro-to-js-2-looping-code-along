// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
//
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// let cards = (["Guadalupe", "Ollie", "Aki"], "surprise");
function writeCards(cards, eventName) {
    const newWriteCards = [];
    for (let i = 0; i < cards.length; i++) {
        newWriteCards.push (`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`)
    }
    return newWriteCards;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
    let i = 10;
    while (i >= 0) {
        console.log(i--)
    }

}