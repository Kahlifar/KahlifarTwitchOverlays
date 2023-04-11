// CONFIG
const intervalTime = 5000; // 10 seconds

// GLOBALS
const socials = [
    {
        name: 'Twitter',
        username: '@OffKahlifar',
    },
    {
        name: 'Instagram',
        username: '@kahlifar_'
    },
    // {
    //     name: 'Twitch',
    //     username: 'ttv/kahlifar'
    // },
    {
        name: 'Youtube',
        username: 'Kahlifar'
    },
    {
        name: 'Discord',
        username: 'dc.kahlifar.de'
    },
    {
        name: 'Website',
        username: 'kahlifar.de'
    }
]

const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);


// FUNCTIONS
async function switchSocials() {
    while (true) {
        for (i of socials) {
            document.getElementsByClassName("socials-box__item__image")[0].src = `assets/images/socials/${i.name.toLowerCase()}.svg`;
            document.getElementsByClassName("socials-box__item__text")[0].innerHTML = i.username;
            await sleep(intervalTime);
        }
    }
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

if (urlParams.get('socials') == 'true') {
    switchSocials();
} else {
    document.getElementsByClassName("socials-box")[0].style.display = "none";
    document.getElementsByClassName("sidebar")[0].style["margin-left"] = "auto";
}