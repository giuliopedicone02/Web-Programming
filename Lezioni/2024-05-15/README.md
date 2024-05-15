# JavaScript

Linguaggio di programmazione che permette di progettare un ambiente di interazione per le nostre pagine, passando da una pagina statica ad una dinamica.
Linguaggio tipizzato dinamicamente, non devo definire il tipo di una variabile ma a runtime il tipo si adatterà automaticamente.
Linguaggio multiparadigmico permette la programmazione asincrona, linguaggio single thread non bloccante gestita dalla programmazione asincrona.

Si basa su ECMA script che definisce delle linee guida su cosa è possibile e come è possibile fare operazioni in Javascript

Javascript permette di conservare valori all'interno di variabili, operare sulle stringhe, definire codice da eseguire in funzione di determinati eventi che possono essere scatenati da qualcosa all'interno di una applicazione web come il movimento del mouse, può utilizzare le API di un browser web (accesso alla webcam o al microfono del'utente), può eseguire richieste HTTP sincrone o asincrone, può gestuire il rendering della grafica 3D e può eseguire file media.

## Come funziona?

Questo linguaggio viene eseguito all'interno dello stesso browser che ha un engine che ha il compiito di prendere il codice ed eseguirlo a run time, con javascript è possibile modificare dinamicamente la visualizzazione grafica di una pagina web

## Sicurezza

Ogni volta che apriamo una scheda il browser crea uno spazio sicuro e protetto chiamato sandbox che permette di eseguire il codice javascript in modo sicuro, chiedendo i permessi dell'accesso a webcam e microfono.

## Cosa è possibile fare?

- Videogiochi multiplayer
- Applicazioni web
- Applicazioni desktop
- Applicazioni mobile

Esempi: Telegram, Discord, Spotify

## Interpretazione VS Compilazione

Javascript è un linguaggio interamente interpretato (come Python) e non compilato come C o C++, si basa quindi su un interprete creato con un linguaggio compilato. L'interprete prende una riga e la traduce in un linguaggio che l'interprete possa eseguire.

Un linguaggio compilato ha bisogno di definire la tipologia di variabili e cosa essi devono contenere, javascript è riflessivo conosce cosa esso possa fare e come poterlo modificare

## Come si aggiunge JavaScript ad una pagina web?

In modo interno tramite i tag $$ <script></script> $$

## Le variabili

Le variabili possono iniziare con una lettera, un underscore o il simbolo del dollaro, non è possibile utilizzare numeri o qualsiasi altro carattere speciale

Per dichiarare le variabili abbiamo 3 modi:
- Con la keyword var: permette di creare una variabile che sarà sempre e comunque globale indipendentemente dallo scope 
- Assegnando semplicemente qualcosa ad un nome di variabile, crea un warning e sarebbe meglio evitarne l'utilizzo
- Con la keyword let: variabile con uno scope relativo alla posizione in cui essa è dichiarata
- Con la keyword const: variabile che non potrà essere modificata

Una variabile dichiarata usando var o let al quale non è stata assegnata alcun valore ha come tipologia undefined

## Tipi di dati primitivi

- Stringhe
- Numeri (indepndentemente che sia intero o decimale)
- Booleani
- Undefined
- Null

## Stringhe

Possibile indicizzare le stringhe come fossero array ed è quindi possibile accedere ad un carattere di una stringa tramite l'uso delle parentesi quadre, possibile anche concatenare le stringhr tramite +

## Conversione di tipologie di dati

Assegnando allo stesso nome di variabile inizialmente un numero e poi una stringa il suo tipo cambierà di conseguenza.

Nota bene.
> Possibile stampare il tipo di una variabile tramite typeof(x)

## Statement if

Possibile eseguire un pezzo di codice o un altro in base alla condizione contenuta tra parentesi

## Switch case

Ottimizzazione di if sequenziali, la differenza con C/C++ è che nel case si possano usare solo enum char o numeri in JavaScript anche stringhe

## Condizionali

- Numeri: Se negativi verranno valutati false, se positivi true
- Stringhe: False se vuota e True se contiene un valore
- Oggetti: Sempre true

## Operatori di comparazione

L'operatore == permette di confrontare se il dato contenuto in due variabili è uguale o meno
L'operatore === oltre al contenuto controlla anche la tipologia

Es:
let a = "2";
let b = 2;
console.log(a == b) // true
console.log(a === b) // false

## Operatore ternario

Permette di costruire una if in una singola espressione, identica a quella vista in C/C++

## Ciclo While

Permette di iterare un pezzo di codice in base alla condizione inserita tra parentesi

## Ciclo For

Prevede tre parametri separati da ;:
- Inizializzazione
- Condizione
- Espressione finale

Essite anche l'enhanced for come in Python.

## Array

Gli array in javascript sono degli oggetti che hanno a disposizione dei metodi, come il metodo push che permette di inserire alla fine dell'array un elemento, il pop che permette di eliminare il primo elemento, la shift che rimuove il primo elemento dalla testa ed unshift che lo rimuove.

indexOf() permette di trovare la posizione di un elemento all'interno dell'array restituisce -1 se non lo trova.

## Funzioni in JavaScript

Si definisce utilizzando la keyword function seguita dal nome di funzione seguita da parentesi tonde dove inserire i parametri. Ma definirla in questo modo la rende globale.

