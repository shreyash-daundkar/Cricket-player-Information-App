const nameElement = document.getElementById("name");
const birthplaceElement = document.getElementById("birthplace");
const careerDescriptionElement = document.getElementById("careerDescription");
const matchesElement = document.getElementById("matches");
const centuriesElement = document.getElementById("centuries");
const scoreElement = document.getElementById("score");
const wicketsElement = document.getElementById("wickets");

const api = "http://localhost:4000/players";
editId = null;

document.getElementById("playerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const playerData = {
    name: nameElement.value.toLowerCase(),
    birthplace: birthplaceElement.value,
    career: careerDescriptionElement.value,
    matches: matchesElement.value,
    centuries: centuriesElement.value,
    score: scoreElement.value,
    wickets: wicketsElement.value,
  };

  try {
    if (editId) {
      const response = await axios.put(api + "/" + editId, playerData);
      editId = null;
    } else {
      const response = await axios.post(api, playerData);
    }
    nameElement.value = "";
    birthplaceElement.value = "";
    careerDescriptionElement.value = "";
    matchesElement.value = "";
    centuriesElement.value = "";
    scoreElement.value = "";
    wicketsElement.value = "";
  } catch (error) {
    console.log(error.message);
  }
});

document.getElementById("searchButton").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.toLowerCase();

  if (!query) {
    document.getElementById("searchResults").innerHTML =
      "Please enter a player name.";
    return;
  }

  try {
    const response = await axios.get(api + "/" + query);
    const player = response.data;
    if (player.id) {
      document.getElementById(
        "searchResults"
      ).innerHTML = `<div class="player-result">
            <h3>${player.name}</h3>
            <p>Birthplace: ${player.birthplace}</p>
            <p>Career: ${player.career}</p>
            <p>Number of Matches: ${player.matches}</p>
            <p>Centuries: ${player.centuries}</p>
            <p>Total Score: ${player.score}</p>
            <p>Wickets: ${player.wickets}</p>
            <button onclick='editPlayer(${JSON.stringify(
              player
            )});'>Edit</button>
            <button onclick='deletePlayer(${player.id});'>Delete</button>
        </div>`;
    } else
      document.getElementById("searchResults").innerHTML = "No results found.";
  } catch (error) {
    document.getElementById("searchResults").innerHTML = `${err.message}`;
  }
});

function editPlayer(playerData) {
  if (playerData) {
    nameElement.value = playerData.name;
    birthplaceElement.value = playerData.birthplace;
    careerDescriptionElement.value = playerData.career;
    matchesElement.value = playerData.matches;
    centuriesElement.value = playerData.centuries;
    scoreElement.value = playerData.score;
    wicketsElement.value = playerData.wickets;

    document.getElementById("playerForm").scrollIntoView();

    document.getElementById("searchResults").innerHTML = "";

    editId = playerData.id;
  }
}

async function deletePlayer(id) {
    const res = await axios.delete(api + '/' + id);
    document.getElementById("searchResults").innerHTML = "";
}
