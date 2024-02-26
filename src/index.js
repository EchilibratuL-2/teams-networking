import "./style.css";

console.info("app ready");

function getTeamAsHTML(team) {
  return `<tr>
  <td>${team.promotion}won15</td>
  <td>${team.members}Noi</td>
  <td>${team.name}Teams</td>
  <td>${team.url}github</td>
  <td>x</td>
</tr>`;
}

function renderTeams(teams) {
  // console.warn("render", teams);
  const teamsHTML = teams.map(getTeamAsHTML);
  // console.info(teamsHTML);

  document.querySelector('#teamsTable tbody').innerHTML = teamsHTML.join("");
}

function loadTeams() {
  const promise = fetch("http://localhost:3000/teams-json")
    .then(r => r.json())
    .then(teams => {
      renderTeams(teams);
      return teams;
    });
  // console.warn("loadTeams", promise);
}

loadTeams();
