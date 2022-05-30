/*
function opretCykelrytter() {
  let opretC = document.getElementById('btn-gem');
  opretC.addEventListener('click', e => {
    e.preventDefault()
    const cykelRytterObj = {
      "rytterNavn": document.getElementById('create-fn').value,
      "rytterEfternavn": document.getElementById('create-ef').value,
      "rytterAlder": document.getElementById('create-a').value,
      "rytterLand": document.getElementById('create-bpoint').value,
      "rytterTid": document.getElementById('create-spoint').value,
      "bjergPoint": document.getElementById('create-tid').value,
      "spurtPoint": document.getElementById('create-hold').value,
      "cykelhold": document.getElementById('create-hold').value,

    }
    const options = makeOptions('POST', cykelRytterObj)

    fetch('http://localhost:8080/opret/cykelrytter', options).then(res => res.json())
      .then(data => {
        fetchCykelRytter()
      })

    opretCykelrytter();

    function makeOptions(method, body) {
      var opts = {
        method: method,
      }
      if (body) {
        opts.body = JSON.stringify(body);
      }
      return opts;
    }
*/







