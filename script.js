// 1802382096831378
// 1802382096831378	
// https://superheroapi.com/api/access-token

const SUPERHERO_TOKEN = '1802382096831378'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
    // id: 👉 base_url/id
    // json.image.url

    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.powerstats)
            showHeroInfo(json)
            // const name = `<h2 text-align=center>${json.name}</h2>`
            // const intelligence = `<p>Intelligence:${json.powerstats.intelligence}</p>`
            // const strength = `<p>Strength:${json.powerstats.strength}</p>`
            // heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=200 width=200 /> ${stats}`
        })
}

const getSearchSuperHero = (name) => {
    // name 👉 base_url/search/batman
    // json.results[0].image.url

    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            // console.log(hero)
            // heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width=200 />`
            showHeroInfo(hero)
        })
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}

const showHeroInfo = (character) => {
    const name = `<h2>${character.name.toUpperCase()}</h2>`
    const image = `<img src='${character.image.url}' height=200 width=200/>`
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]}${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    // console.log(stats.join(''))
    // return stats.join('')
    // heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=200 width=200 /> ${stats}`
    return heroImageDiv.innerHTML = `${name}${image}${stats}`
}

const randomHero = () => {
    const numberOfHeros = 731
    return Math.floor(Math.random() * numberOfHeros) + 1
}

newHeroButton.onclick = () => getSuperHero(randomHero())

searchButton.onclick = () => getSearchSuperHero(searchInput.value)