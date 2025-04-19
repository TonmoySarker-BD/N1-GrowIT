function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US');
    const date = now.toLocaleDateString('en-US');
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}
setInterval(updateDateTime, 1000);
updateDateTime();



//  For  Hero section Slide
const hero = document.getElementById("hero");

const backgrounds = [
    "../assets/s4.jpg",
    "../assets/s3.jpg",
    "../assets/s2.jpg"
];

let current = 0;

function updateHeroBackground() {
    hero.style.backgroundImage = `url('${backgrounds[current]}')`;
    current = (current + 1) % backgrounds.length;
}

setInterval(updateHeroBackground, 5000);
updateHeroBackground();