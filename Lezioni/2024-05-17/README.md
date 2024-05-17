## Funzioni freccia

Alternativa sintatticamente compatta per esprimere funzioni regolari.
Hanno una importante proprietà rispetto alle funzioni normali, lo vedremo più avanti.

## JS Hoisting

Proprietà che permette a javascript, per quanto riguarda le funzioni nominali, di poter essere dichiarate in primis in memoria in modo tale che la stessa possa essere richiamata prima o dopo rispetto alla sua definizione logica.

Carica in memoria solo le dichiarazioni e non le inizializzazioni.

Javascript va a caricare il concetto di funzione e poi la logica della funzione, qualora venisse richiamata in futuro questa è già stata memorizzata in memoria

## JS Scope

Spazio all'interno di una funzione con un suo stack che definisce un'area per le sue variabili.

In questo esempio result è dichiarata var, come se fosse una variabile globale, ma l'output da errore perchè innestata in un altro namescope dato dalla funzione in cui essa è definita.

        function somma(num1, num2) {
            var result = num1 + num2;
            console.log(result);
        }

        somma(2, 2);
        console.log(result);

Javascript ha un problema di sicurezza, il codice arriva in chiaro ed è possbile modificare variabili e richiamare funzioni tramite la console.

            let username = "fedy";

            let login = (user) => {
                if (user == "fedy") {
                    console.log("loggato");
                }
                else {
                    console.log("Errore di autenticazione");
                }
            }

            login(username);

Come proteggerci quindi? Meglio utilizzare delle funzioni anonime che non consentono di essere richiamate tramite console.

Per proteggermi o per creare il concetto di private in Javascript si usa la closure.

## Closure

        (() => {
            let username = "fedy";

            let login = (user) => {
                if (user == "fedy") {
                    console.log("loggato");
                }
                else {
                    console.log("Errore di autenticazione");
                }
            }

            login(username);
        })();

Tra le graffe definisco una funzione anonima, che metto tra parentesi tonde, per eseguirla basta inserire (); 

In questo modo login ed username non potranno essere modificati tramite console. Questo ha un problema non è possibile richiamare questo pezzo di codice altrove, è consigliabile utilizzare la closure nel main.

## Oggetti in Javascript

Javascript permette la programmazione ad oggetti.

Domanda di esame: Ogni classe a prescindere dal suo nome, avrà sempre un metodo in comune con le altre classi: il costruttore.

In JavaScript esiste il tipo oggetto, tutto in Javascript è un oggetto e nativamente in JavaScript un oggetto si definisce come **var obj = {}**;

Per definire gli attributi uso la coppia chiave valore separata dai :, notazione simile al JSON che non è altro che un JavaScript Object Notation che permette di descrivere un oggetto in funzione di una stringa.

La classe Object serve per accedere ad alcuni metodi statici che permettono di istanziare nuovi oggetti in funzione di una mappa o una ricerca, mediante ad esempio il metodo Object.create().

## Notazione con parentesi quadre

Il dizionario è un oggetto che permette di associare coppie chiave valore dove la chiave è solitamente una stringa. I dizionari in JavaScript non esistono ma è possibile aggirare il problema utilizzando la notazione a parentesi quadrate.

