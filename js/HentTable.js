const url = "http://localhost:8080/cykelrytter";
let cykelrytter = [];

function fetchCykelRytter() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      cykelrytter = data
      console.log(data)
      opretRække(cykelrytter)
    })
}

fetchCykelRytter();
//setupHandlers();

function opretRække() {
  const rows = cykelrytter.map(cr => `
  <tr>
  <td>${cr.rytterNavn}</td>
  <td>${cr.rytterEfternavn}</td>
  <td>${cr.rytterAlder}</td>
  <td>${cr.rytterLand}</td>
    <td>${cr.rytterTid}</td>
  <td>${cr.bjergPoint}</td>
  <td>${cr.spurtPoint}</td>
  <td>${cr.cykelhold}</td>
  <tr>
  `)
  let kolone = ` <tr>
 <th>Navn</th>
 <th>Efternavn</th>
 <th>Hold</th>
</tr>`

  document.getElementById("tbCykelrytter").innerHTML = rows.join("");
}

console.log(cykelrytter)
