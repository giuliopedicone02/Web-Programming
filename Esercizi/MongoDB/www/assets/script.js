const nome = document.querySelector(".form>p>.nome");
const cognome = document.querySelector(".form>p>.cognome");
const matricola = document.querySelector(".form>p>.matricola");
const invio = document.querySelector(".form>.invia");

const dati = document.querySelector(".elenco");


function inserisciUtente() {
    let obj = {
        nome: nome.value,
        cognome: cognome.value,
        matricola: matricola.value
    }

    axios.post("/api/newUser", obj)
        .then(data => console.log(data))
        .catch(error => console.error(error));

    nome.value = "";
    cognome.value = "";
    matricola.value = "";

    aggiornaLista();
}

function aggiornaLista() {
    axios.get("/api/users")
        .then((data) => { stampaUtenti(data.data) })
        .catch((error) => { console.error(error) });
}

function stampaUtenti(data) {
    dati.innerHTML = "";

    for (elem of data) {
        obj = "<ul>\
        <li>Nome: "+ elem.nome + "</li>\
        <li>Cognome: "+ elem.cognome + "</li>\
        <li>Matricola: "+ elem.matricola + "</li>\
        </ul>";

        dati.innerHTML += obj;
    }
}

invio.addEventListener("click", inserisciUtente);

aggiornaLista();
