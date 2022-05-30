const url = 'https://localhost:8080';

let cykkelrytter =[];

function fetchCykelrytter() {
  fetch(url).then(res => res.json())
    .then(data => {
      cykkelrytter = data
      console.log(data)
      createCykelrytterRows(cykkelrytter);
    })
}

function createCykelrytterRows() {
  const rows = cykkelrytter.map(cykkelrytter => `
  <tr>
  <td>
  ${cykkelrytter.rytterNavn}
</td>
 <td>
  ${cykkelrytter.rytterEfternavn}
</td>
 <td>
  ${cykkelrytter.rytterAlder}
</td>
 <td>
  ${cykkelrytter.rytterLand}
</td>
 <td>
  ${cykkelrytter.bjergPoint}
</td>
 <td>
  ${cykkelrytter.spurtPoint}
</td>
 <td>
  ${cykkelrytter.cykelHold}
</td>
</tr>
  `);
  document.getElementById('tbCykelrytter').innerHTML = rows.join('');
}

fetchCykelrytter();
