## Programmazione Asincrona: callback

Le funzioni di callback sono funzioni che passo come parametro e posso usare come callback ovvero come richiamo a finire di un determinato evento o operazione.

## Async ed Await

Parole chiave che permettono di rendere asincrono un codice visivamente scritto in maniera sincrona, qualsiasi funzione asincrona qualora avesse una return ritorna un oggetto Promise 

L'await permette senza rendere bloccante il flusso principale del nostro codice un qualcosa che deve attendere la risoluzione di una operazione del tempo. L'await funziona con le promise, a loro richiamo restituiscono una promise di se stesse.

Se la promessa dovesse andare bene async ed await fanno bene il loro lavoro, in caso contrario si devono utilizzare i costrutti try e catch

## Richieste HTTP

Possibilità di effettuare richieste di rete mediante JavaScript il che serve a poter interagire con altri server.

## Javascript AJAX

Modo più antico e difficile da ricordare, serve a creare richieste HTTP di tipo GET e POST, si crea un oggetto e tramite http.open() si crea una nuova richiesta.
La funzione evento onreadystatechange() permette di eseguire una funzione nel momento in cui la richiesta dovesse andare bene, tramite la http.send() la richiesta viene inviata.

## JS FETCH

Basata sulle promise, permette in maniera più semplice di eseguire una richiesta get a partire da un server, tramite il metodo fetch(url) ritorna una promise di eseguire una richiesta il primo then gestisce una promessa di richiesta ed il secondo then una promessa di gestione della risposta con il catch non riesco a gestire l'errore della richiesta, per gestirlo esistono delle librerie come AXIOS che fondamentalmente permette di poter esguire una richiesta post o get ed a gestire errori tramite promise.

## TERZA PROVA IN ITINERE

Va presentato tra due settimane

Prendere la console HTML/CSS e renderla operativa, ci si aspetta lato client almeno delle operazioni che l'utente possa eseguire da linea di comando che funzionano

1) Stampa data e orario attuale
2) Tramite un comando la console fa una richiesta di rete e ne visiona il risultato in console (es: meteo), deve prendere da riga di comando almeno un parametro come ad esempio la città del quale si vuole sapere il meteo
3) Comando clear
4) Comando a piacere che tipicamente su una console potrebbe funzionare
5) Rendere operativi i pulsanto di una console (tasto di apertura e chiusura, non deve nascondersi, deve proprio chiudersi cioè che l'HTML si cancelli e che non esista in memoria la possibilità di gestire la console, opzionale anche gli altri due pulsanti)

Al click di un pulsante instanziare un oggetto logico con l'interfaccia grafica, tra i comandi se dovessi mettere un comando non supportato dovrebbe spuntare un messaggio di comando non supportato, deve esserci l'help con la lista dei comandi supportati
