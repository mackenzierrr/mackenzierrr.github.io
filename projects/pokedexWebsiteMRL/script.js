
// storing the HTML elements as variables
const clearButton = document.getElementById("clear")
const search = document.getElementById("search")
let pokedex = document.getElementById("pokedex")

// store the puzz (pokehuzz) info
let allPokemon = []



async function fetchPokemon() {
    // // gets da pokemon info from da API (data if ur a nerd)
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1008`);
      // waits for promise returned by fetch, gets data from api
    
    // displays error message if response is not okay
    if (!result.ok) {
        throw new Error("No pokemon :(");
    }
  // she transitioned to json, good for her
// put result in data
    const response = await result.json(); // Corrected line
    const data = response.results; // Ensure this is correct based on API response

    allPokemon = await Promise.all(
        data.map(async (pokemon) => { // Corrected line
            const details = await fetch(pokemon.url).then(res => res.json());
            return {
                id: details.id,
                name: details.name,
                sprite: details.sprites.front_default,
                types: details.types.map(t => t.type.name).join(", ")
            };
        })
    );

    displayPokemon(allPokemon);
}




function displayPokemon(pokemonList) {
    // Clear existing content in the pokedex
    pokedex.innerHTML = '';

    // Iterate through the pokemonList array
    pokemonList.forEach(pokemon => {
        // Create a card element for each Pokémon
        const card = document.createElement('div');
        card.className = 'pokemonCard';

        // Create content for the card
        card.innerHTML = `
            <h3>${pokemon.name} (ID: ${pokemon.id})</h3>
            <img src="${pokemon.sprite}" alt="${pokemon.name}" />
            <p>Types: ${pokemon.types}</p>
        `;

        // Append the card to the pokedex div
        pokedex.appendChild(card);
    });
}

// Call fetchPokemon to initialize
fetchPokemon();
// creates the searching listener thing for adding or deleting text
search.addEventListener('input', function(){
// puts the entered text into a variable
    var searchText = search.value.toLowerCase()
// filtering the pokemon that conform to whats entered in the search bar
    var filteredPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchText))
    // runs display pokemon with the filter instead 
    displayPokemon(filteredPokemon)
    // displays pokemon that obey said filter
})
// creates a button that clears the input and resets the array
clearButton.addEventListener('click', ()=> {
    // sets the search bar/input back to empty
    search.value = []
    // runs display pokemon without filter so we see everyone :D
    displayPokemon(allPokemon)
})