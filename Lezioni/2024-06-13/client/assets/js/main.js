console.log("Tanto pe dire lo mettiamo")

const titoloInput = document.querySelector("#titolo");
const annoInput = document.querySelector("#anno");
const plotInput = document.querySelector("#plot");
const authorInput = document.querySelector("#autore");
const publisherInput = document.querySelector("#publisher");
const generiInput = document.querySelector("#generi");

const listaLibri = document.querySelector("#lista-libri");

const btn = document.querySelector("#btn-save");

const eliminaLibro = async (id) => {
    await fetch("/api/books/"+id, {method:"delete"});
    caricaLibri();
}

const caricaLibri = async () => {
    listaLibri.innerHTML = "Caricamento dei libri in corso...";
    const resp = await fetch("/api/books");
    const arrayLibri = await resp.json();

    console.log(listaLibri);
    listaLibri.innerHTML = "";

    for(const libro of arrayLibri){
        const nuovaRiga = document.createElement("div");
        nuovaRiga.innerHTML = "<h1>"+libro.title+"</h1>\
        <h2>("+libro.year+"), "+libro.author+"</h2>"+libro.plot;

        const buttonElimina = document.createElement("button");
        buttonElimina.innerHTML = "ELIMINA ("+libro.id+")"
        buttonElimina.addEventListener("click", () => {
            eliminaLibro(libro.id)
        });
        nuovaRiga.appendChild(buttonElimina);
        listaLibri.appendChild(nuovaRiga)
    }
}

btn.addEventListener("click", () => {
    const esempioLibro = {
        title : titoloInput.value,
        year : annoInput.value,
        author : authorInput.value,
        plot : plotInput.value,
        publisher : publisherInput.value,
        generes : generiInput.value.split(",")
    }

    fetch("/api/books", {
        method : "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(esempioLibro)
    }).then(() => {
        caricaLibri();
    });
});


caricaLibri();