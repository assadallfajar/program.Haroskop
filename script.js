const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    this.innerHTML = "Coba Lagi";
    this.style.color = "red";

    let number = Math.round(Math.random() * 10);

    console.log(number);

    function horoscope(randomNumber) {
        if (randomNumber >= 7 && randomNumber <= 10) {
            return "Hebat!!";
        } else if (randomNumber >= 4 && randomNumber <= 7) {
            return "Boleh Juga!";
        } else {
            return "Mengerikan..";
        }
    }

    const hasil = document.getElementById("hasil");
    const newPara = document.createElement("p");
    newPara.innerHTML = horoscope(number);
    hasil.append(newPara);

});
