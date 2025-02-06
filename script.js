const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! 💗❤️",
    "Can I have you for the rest of my life",
    "Say yes, Say yesss 😭😭",
    "Cause i need to know...",
    "Yeah no lyrics here, I made my own song hehe",
    "Why you gotta be so ruude?", 
    "Don't you know I am human tooo😭😭?",
    "Why you gotta be so ruude?",
    "I am gonna Marry You anyway..",
    "Marry You girlll, Marry You Anyway",
    "Marry You girll, Yeah no matter what you say",
    "Marry You girllll",
    "Say yes, Say yes pleasee!",
    "Song ended, Now please say yes🥺🥺", 
    "I will start crying now...",
    "I really really will... 😭",
    "You want me to see cry, Right?",
    "So you really want, Don't you 😭", 
    "I am cryingg Now 😭😭😭😭", 
    "Ohh meri Husan Pari",
    "Oh meri Pasandida Aurat",
    "Ab toh Haa boldo na pleaseee! 💗❤️😭"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Increase the font size of the "yes-button"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize + 2}px`;  // Increase font size by 2px on each click
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.addEventListener('click', handleNoClick);
    yesButton.addEventListener('click', handleYesClick);
});
