const inputField = document.getElementById("codeBox");

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Verhindert ggf. das Neuladen der Seite
        checkPwd(); // Deine Funktion aufrufen
    }
});

if (localStorage.getItem("solved") === "yes") {
    goToCard(7);
}

async function checkPwd(userPwd) {
    var formData = new FormData();
    formData.append('upwd', userPwd)

    try {
        response = await fetch('check.php', {
            method: 'POST',
            body: formData
        });
        result = await response.text();

        if (result.trim() === "success") {
            goToCard(6);
            localStorage.setItem("solved", "yes");
        } else {
            goToCard(9);
        }
    } catch (error) {
        console.error("Server-Fehler: ", error);
    }
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