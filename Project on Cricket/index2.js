
const getScore = async () => {
  const response = await fetch('https://apiv2.api-cricket.com/?method=get_livescore&APIkey=a0683c54076b05c169be809c7313bfaf3aee132e6281ec15f42a2bbe6936c3ec');
  const scores = response.json();
  console.log(response);
  let seescore = scores.then(jsonData => jsonData.result);
  console.log(seescore);
  seescore.then(response => response.forEach(element2 => {
    console.log(element2.scorecard[`${element2.event_home_team} 1 INN`]);
  }))
  seescore.then(responce => responce.forEach(element => {
    document.getElementById("score").innerHTML += `<tr align=center>
            <td>${element.event_key}</td>
            <td><img src="${element.event_home_team_logo}" width="30" height="30" />${element.event_home_team}
            <br>
            ${"V/S"}
            <br>
            <img src="${element.event_away_team_logo}" width="30" height="30" />${element.event_away_team}</td>
            <td>${element.event_time}</td>
            <td>${element.event_stadium}</td>
            <td>${element.event_type}</td>
            <td>${element.league_name}</td>
            <td>${element.event_status}</td>
            <td>${element.event_toss}</td>
            <td>${element.event_home_final_result}
            <br>
            ${element.event_away_final_result}</td>
            <td>${element.event_home_rr}
            <br>${element.event_away_rr}</td>
            
            
          </tr > `;
  }))
}
getScore();

