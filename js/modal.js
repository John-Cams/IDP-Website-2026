let modal = document.getElementById("helpModal");
let help = document.getElementById("help");
let close = document.getElementById("closeBtn");

help.onclick = function() {
    modal.style.display = "flex"
}
close.onclick = function() {
    modal.style.display = "none"
}

