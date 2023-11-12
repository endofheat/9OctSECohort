function newReleaseCard() {
    const template = document.getElementById("card-temple").contentEditable.cloneNode(true);

    template.querySelector(".card-title").innerText = "";
    template.querySelector(".card-text").innerText = "";

    document.querySelector("#card-list").appendChild(template);
}