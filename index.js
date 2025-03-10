const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, birthday) {
    let thankYouCards = []; // Initialize an empty array

    for (let i = 0; i < cards.length; i++) {
        thankYouCards.push(`Thank you, ${cards[i]}, for the wonderful ${birthday} gift!`);
    }

    return thankYouCards;
}

console.log(writeCards(cards, "surprise"));

function countDown(){
let n = 10;
while  (n >= 0) {
  console.log(n);
  n--
}
}