let scores = {
  home: 0,
  guest: 0,
};

function updateScore(team, points) {
  // Increment the score for the appropriate team

  scores[team] += points;

  // Update the respective score display
  document.getElementById(`${team}score`).innerHTML = scores[team];
}

document.getElementById('resetButton').addEventListener('click', function () {
  location.reload();
});
