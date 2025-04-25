const fibNumbers = [1, 2, 3, 5, 8, 13, 21];
const votes = {};

function createCards() {
  const cards = document.getElementById('cards');
  fibNumbers.forEach(num => {
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.onclick = () => vote(num);
    cards.appendChild(btn);
  });
}

function vote(number) {
  // Using ZoomMtg or Zoom SDK later can get userId
  const user = 'me';
  votes[user] = number;
  alert(`You voted: ${number}`);
}

function revealVotes() {
  const result = document.getElementById('vote-result');
  result.innerHTML = '<h2>Votes</h2>';
  for (const [user, vote] of Object.entries(votes)) {
    const p = document.createElement('p');
    p.textContent = `${user}: ${vote}`;
    result.appendChild(p);
  }
}

function resetVotes() {
  for (const user in votes) delete votes[user];
  document.getElementById('vote-result').innerHTML = '';
}

createCards();