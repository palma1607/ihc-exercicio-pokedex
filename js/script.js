

function returnResponse (response){
    return response.json()
}

function itemFor (item){

    const listPokemon = document.getElementById("poke-list")

    const imagePokemon = document.createElement("img")
    imagePokemon.width = 300
    imagePokemon.height = 300

    imagePokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png"

    const namePokemon = document.createElement("p")
    namePokemon.innerHTML = item.name //item.url

    const line = document.createElement("li")
    line.appendChild(imagePokemon)
    line.appendChild(namePokemon)

    listPokemon.appendChild(line)

}

function jsonResponse (json){
    
    //console.log(json.results)
    json.results.forEach(itemFor)
}

function loadPokemonList(){
 
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    .then(returnResponse)
    .then(jsonResponse)
    console.log("Oi")
}
