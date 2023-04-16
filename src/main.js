const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const btn = document.getElementById('btn');

async function getRandomHero() {
    const id = Math.floor(Math.random() * 731) + 1; 
    const response = await fetch(`https://www.superheroapi.com/api.php/3337418013147543/${id}`);
    const data = await response.json();
    return data;
}

async function compare() {
    const hero1 = await getRandomHero();
    const hero2 = await getRandomHero();
    card1.innerHTML = `
    <img src="${hero1.image.url}" alt="${hero1.name}">
    <h2>${hero1.name}</h2>
    <p>Intelligence: ${hero1.powerstats.intelligence}</p>
    <p>Strength: ${hero1.powerstats.strength}</p>
    <p>Speed: ${hero1.powerstats.speed}</p>
    <p>Durability: ${hero1.powerstats.durability}</p>
    <p>Power: ${hero1.powerstats.power}</p>
    <p>Combat: ${hero1.powerstats.combat}</p>
  `;
    card2.innerHTML = `
    <img src="${hero2.image.url}" alt="${hero2.name}">
    <h2>${hero2.name}</h2>
    <p>Intelligence: ${hero2.powerstats.intelligence}</p>
    <p>Strength: ${hero2.powerstats.strength}</p>
    <p>Speed: ${hero2.powerstats.speed}</p>
    <p>Durability: ${hero2.powerstats.durability}</p>
    <p>Power: ${hero2.powerstats.power}</p>
    <p>Combat: ${hero2.powerstats.combat}</p>
  `;
    const total1 = Object.values(hero1.powerstats).reduce((a, b) => parseInt(a) + parseInt(b));
    const total2 = Object.values(hero2.powerstats).reduce((a, b) => parseInt(a) + parseInt(b));
    if (total1 > total2) {
        card1.classList.add('winner');
        card 
    }

}