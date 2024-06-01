window.onload = () => {
    class Terminale {
        constructor() {
            this.init();
        }

        init = () => {
            this.mainContainer = document.querySelector(".desktop");
            this.mainTerminale = this.mainContainer.querySelector(".terminale");
            this.pulsanteChiusura = this.mainTerminale.querySelector(".header>.chiusura");
            this.pulsanteRiduci = this.mainTerminale.querySelector(".header>.riduci");
            this.pulsanteEspandi = this.mainTerminale.querySelector(".header>.espandi");
            this.inputContent = this.mainTerminale.querySelector(".row>.input");
            this.pulsanteApertura = this.mainContainer.querySelector(".footer>.terminal");
            this.riduci = false;
            this.chiusura = false;
            this.fullscreen = false;

            this.pulsanteApertura.addEventListener("click", this.creaTerminale);
            this.pulsanteChiusura.addEventListener("click", this.distruggiTerminale);
            this.pulsanteRiduci.addEventListener("click", this.riduciTerminale);
            this.pulsanteEspandi.addEventListener("click", this.espandiTerminale);

            this.inputContent.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    this.execute(this.inputContent.textContent);
                }
            });

            this.makeDraggable();

        };

        makeDraggable = () => {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            let shellBar = this.mainContainer.querySelector(".header");

            shellBar.onmousedown = (e) => {
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            };

            const elementDrag = (e) => {
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                this.mainContainer.style.top = (this.mainContainer.offsetTop - pos2) + "px";
                this.mainContainer.style.left = (this.mainContainer.offsetLeft - pos1) + "px";
            };

            const closeDragElement = () => {
                document.onmouseup = null;
                document.onmousemove = null;
            };
        }

        creaTerminale = () => {
            if (this.riduci) {
                this.riduci = false;
                this.mainTerminale.style.display = "block";
            }
            else if (this.chiusura) {
                this.chiusura = false;

                const elemento = document.createElement("div");
                elemento.classList.add("terminale");

                const header = document.createElement("div");
                header.classList.add("header");

                const chiudi = document.createElement("div");
                chiudi.classList.add("icon", "chiusura");
                header.appendChild(chiudi);

                const riduci = document.createElement("div");
                riduci.classList.add("icon", "riduci");
                header.appendChild(riduci);

                const espandi = document.createElement("div");
                espandi.classList.add("icon", "espandi");
                header.appendChild(espandi);

                const titolo = document.createElement("div");
                titolo.classList.add("titolo");
                titolo.innerHTML = "user@terminale";
                header.appendChild(titolo);

                const row = document.createElement("div");
                row.classList.add("row");

                const before = document.createElement("span");
                before.classList.add("before");
                before.innerHTML = "user@my-computer:/home/usr/$>";
                before.style.marginRight = "5px";
                row.appendChild(before);

                const input = document.createElement("span");
                input.classList.add("input");
                input.contentEditable = true;
                input.autofocus = true;
                row.appendChild(input);

                elemento.appendChild(header);
                elemento.appendChild(row);
                this.mainContainer.appendChild(elemento);

                this.mainContainer.style.top = "0px";
                this.mainContainer.style.left = "0px";

                this.init();
                input.focus();
            }
        };

        distruggiTerminale = () => {
            this.chiusura = true;
            this.mainTerminale.remove();
        };

        riduciTerminale = () => {
            this.riduci = true;
            this.mainTerminale.style.display = "none";
        };

        espandiTerminale = () => {
            this.fullscreen = !this.fullscreen;

            if (this.fullscreen) {
                this.pulsanteEspandi.style.backgroundImage = "url('assets/img/minimize.png')";
                this.mainTerminale.classList.add("fullscreen");
            } else {
                this.pulsanteEspandi.style.backgroundImage = "url('assets/img/maximize.png')";
                this.mainTerminale.classList.remove("fullscreen");
            }
        };

        execute = async (contenuto) => {
            var risultato = "";
            var city = "";
            let clear = false;

            contenuto = contenuto.toLowerCase();

            if (contenuto.includes("weather") == true) {
                var words = contenuto.split(" ");
                contenuto = words[0];
                city = words[1];
            }

            switch (contenuto) {
                case "help":
                    risultato = "Comandi disponibili: <br>\
                                    - <span style='color: greenyellow'>help</span>: Lista dei comandi disponibili <br>\
                                    - <span style='color: greenyellow'>date</span>: Visualizzazione data ed ora attuali <br>\
                                    - <span style='color: greenyellow'>clear</span>: Svuota la console <br>\
                                    - <span style='color: greenyellow'>pwd</span>: Mostra il percorso della directory attuale <br>\
                                    - <span style='color: greenyellow'>weather [city]</span>: Effettua una richiesta di rete che fornisce informazioni sul meteo <br>\
                                    - <span style='color: greenyellow'>exit</span>: Chiude la scheda del browser";
                    break;
                case "date":
                    risultato = this.getDate();
                    break;
                case "clear":
                    clear = true;
                    risultato = this.clear();
                    break;
                case "pwd":
                    risultato = "/home/usr/";
                    break;
                case "weather":
                    risultato = await this.requestDataAsync(city);
                    break;
                case "exit":
                    window.close();
                    break;
                case "":
                    break;
                default:
                    risultato = "<span style='color: red'> Comando non supportato. </span> Digitare \'help\' per la lista dei comandi.";
                    break;
            }

            if (!clear) {
                this.getResult(risultato);
            }

        };

        getResult = (output) => {

            if (output != "") {
                const elemento = document.querySelector(".terminale");

                const row = document.createElement("div");
                row.classList.add("row");

                const risultato = document.createElement("span");
                risultato.classList.add("risultato");
                risultato.innerHTML = output;

                row.appendChild(risultato);
                elemento.appendChild(row);
            }

            this.creaNuovaRiga();
        };

        creaNuovaRiga = () => {
            const elemento = document.querySelector(".terminale");

            const row = document.createElement("div");
            row.classList.add("row");

            const before = document.createElement("span");
            before.classList.add("before");
            before.innerHTML = "user@my-computer:/home/usr/$>";
            before.style.marginRight = "5px";
            row.appendChild(before);

            const input = document.createElement("span");
            input.classList.add("input");
            input.contentEditable = true;
            row.appendChild(input);

            elemento.appendChild(row);

            input.focus();

            this.inputContent.contentEditable = false;
            this.inputContent = input;

            this.inputContent.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    this.execute(this.inputContent.textContent);
                }
            });
        };

        getDate = () => {
            const dataOraAttuali = new Date();
            const anno = dataOraAttuali.getFullYear();
            const mese = (dataOraAttuali.getMonth() + 1) > 9 ? (dataOraAttuali.getMonth() + 1) : "0" + (dataOraAttuali.getMonth() + 1);
            const giorno = dataOraAttuali.getDate() > 9 ? dataOraAttuali.getDate() : "0" + dataOraAttuali.getDate();
            const ora = dataOraAttuali.getHours() > 9 ? dataOraAttuali.getHours() : "0" + dataOraAttuali.getHours();
            const minuti = dataOraAttuali.getMinutes() > 9 ? dataOraAttuali.getMinutes() : "0" + dataOraAttuali.getMinutes();
            const secondi = dataOraAttuali.getSeconds() > 9 ? dataOraAttuali.getSeconds() : "0" + dataOraAttuali.getSeconds();
            var dataOraFormattata = `Data: ${giorno}/${mese}/${anno} <br> Ora: ${ora}:${minuti}:${secondi}`;
            return dataOraFormattata;
        };

        clear = () => {
            const terminale = document.querySelector('.terminale');
            const input = document.querySelector('.input');
            const righe = terminale.querySelectorAll('.row');

            for (let i = 0; i < righe.length; i++) {
                terminale.removeChild(righe[i]);
            }

            this.creaNuovaRiga();
        };

        requestDataAsync = async (city) => {

            const api = {
                key: "acb3f630d63ad039ab645da84c03cd6a",
                base: "https://api.openweathermap.org/data/2.5/",
            }

            let str = "";

            const promessaRisposta = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`);
            const datiJSon = await promessaRisposta.json();

            if (!promessaRisposta.ok)
                return "<span style='color: red'> Richiesta fetch non riuscita! </span> Si prega di specificare la città!";

            console.log(datiJSon);

            str = `<span style='color: greenyellow'>Temperatura attuale</span>: ${datiJSon.main.temp} °C <br>\
            <span style='color: greenyellow'>Temperatura minima</span>: ${datiJSon.main.temp_min} °C <br>\
            <span style='color: greenyellow'>Temperatura massima</span>: ${datiJSon.main.temp_max} °C <br>\
            <span style='color: greenyellow'>Descrizione</span>: ${datiJSon.weather[0].description}<br>\
            <span style='color: greenyellow'>Vento</span>: ${datiJSon.wind.deg}° ${datiJSon.wind.speed} km/h<br>`

            return str;
        };
    }

    new Terminale();
};