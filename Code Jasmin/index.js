const inputField = document.getElementById("codeBox");

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Verhindert ggf. das Neuladen der Seite
        checkPwd(); // Deine Funktion aufrufen
    }
});



function checkPwd(userPwd) {
    goToCard(6);
}

function goToCard(cardId) {
    cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        const cardToHide = cards[i];
        cardToHide.style.display = "none";
    }

    const target = document.getElementsByClassName("card" + cardId)[0];
    target.style.display = "block";
}