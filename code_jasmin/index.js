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
    const formData = new FormData();
    formData.append('upwd', userPwd)

    try {
        const response = await fetch('check.php', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            console.error('HTTP Error ${response.status} - ${response.statusText}');
            return;
        }

        const result = await response.text();
        console.log(result);

        if (result.trim() === "success") {
            goToCard(6);
            localStorage.setItem("solved", "yes");
        } else {
            console.warn("Pwd falsch")
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