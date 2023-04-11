// CONFIG
const defaultGame = "Kahlifar"

// GLOBALS


// FUNCTIONS
async function setSidebar() {
    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);
    const gameName = urlParams.get('game')
    if (gameName == null || gameName == "") {
        return document.getElementsByClassName("sidebar__game__text")[0].innerHTML = defaultGame
    }
    document.getElementsByClassName("sidebar__game__text")[0].innerHTML = gameName
}

setSidebar();