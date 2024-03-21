// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interactin with APIs to retrieve and send data 
//         asynchronously over the web.
//         fetch(url, {options ex: method: GET => Get somes data, 
//         POST => Post somes data, PUT => Put somes data})

/*
// Default how to fetch data from APIs
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(res => {
    if(!res.ok) {
      throw new Error("Cloud not fetch resource!");
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/

// used Async, Await
fetchData();

async function fetchData() {
  try {

    const pokemonName = document.getElementById('poke-name-input').value.toLowerCase();
    const pokeType = document.getElementById('poke-types');
    const pokeAbilities = document.getElementById('poke-abilities');
    const h3abilities = document.getElementById('h3-abilities');
    const h3types = document.getElementById('h3-types');

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!res.ok) {
      throw new Error("Cloud not fetch resource!");
    }

    const data = await res.json();
    console.log(data);
    const pokeSprites = data.sprites.front_default;
    const imgElement = document.getElementById('poke-sprites');
    imgElement.src = pokeSprites;
    imgElement.style.display = "block";
    h3abilities.style.display = "block";
    h3types.style.display = "block";
    pokeAbilities.innerHTML = data.abilities.map(abil =>
      `<li>${abil.ability.name}</li>`
      );
    pokeType.innerHTML = data.types.map(type => 
      `<li>${type.type.name}</li>`
      );
  } catch (error) {
    console.error(error);
  }
}


