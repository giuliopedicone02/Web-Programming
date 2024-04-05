# Lezione di venerdì 06 aprile 2024

## CSS - Pseudo Elementi

Sono degli elementi html che non esistono, si riferiscono rispetto all'elemento selezionato con il selettore ad una determinata parte di questo elemento che però non esiste.

Sono dei piccoli elementi inline, un esempio di pseudo elemento sono i pallini in caso di <ul> o i numeri in caso di <ol>.

[href^=http] tutti gl elementi che hanno href che inizia con http

## Gli Spazi di Colore

I colori in HTMl possono essere specificati in diversi modi:
- Via testo: red
- RGB: Indicando la terna di colori di Rosso Verde e Blu
- HEX: Tre coppie di numeri da 00 ad FF che indicano la terna di colori di Rosso Verde e Blu, viene preceduto dal simbolo # (Se i 3 canali sono uguali come il bianco #FFFFFF si può semplificare in #FFF, vale per tutte le tonalità di grigio)
- RGBA: Differisce da RGB per l'aggiunta del quarto parametro che rappresenta la trasparenza

## Colore del testo

color serve a modificare il colore del testo

## Decorazione del testo

- underline red: Sottolineato in rosso
- underline wavy red: Spesso utilizzato quando si vogliono segnalare errori grammaticali in un testo (unica regola che sostituisce text-decoration-line, text-decoration-color e text-decoration-style, utile per ridurre la latenza)

## Trasformazione del testo

- Capitalize: Prima lettera maiuscola
- Uppercase: Tutto maiuscolo
- Lowercase: Tutto minuscolo

## Ombre al testo

Si specificano le dimensioni dell'ombra dando l'offset dell'asse x, dell'asse y, raggio di blur e colore dell'ombra

## Allineamento del testo

Essendo il testo un elemento inline è possibile definire una regola css con la quale andare ad allineare rispetto al proprio parente il proprio allineamento.

- left: allineamento a sinistra
- right: allineamento a destra
- center: allineamento al centro
- justify: andare a capo in modo uniforme

## Altezza di linea

Spaio tra una linea e l'altra in altezza, si può specificare in px o in percentuale

## Spaziatura delle lettere in un testo

Permette di definire una spaziatura all'interno di una stringa, si indica con letter-spacing e si indica in px o in em (unità di misura che tratteremo più avanti)

## Dimensione del testo (font size)

Indica quanto deve essere alto il testo, più che grande, e può essere definito in funzione letterale con valori di default del browser (smaller, larger) o in pizel o in em

## Spessore del testo (font weight)

Si può indicare in funzione letterale con valori di default del browser (normal, bold, lighter o bolder) o con valori numerici che dipendono dal font installato nel nostro sistema operativo

## Famiglia di font (font family)

Permette di definire il font da utilizzare all'interno di una applicazione web, è possibile specificare più famiglie di font separati da una virgola per priorità di utilizzo se il primo font non viene trovato all'interno del sistema operativo si passa automaticamente al secondo etc...

## Box Model

Ogni elemento HTML viene racchiuso all'interno di una forma regolare quale quadrato o rettangolo, il box model rappresenta il modo in cui il browser renderizza gli elementi html.

Definisce quali sono quelle aree da definire o ri-definire per ogni elemento HTML, queste parti sono le seguenti:
- Content
- Padding (Spaziatura interna tra l'elemento e tutti suoi figli)
- Border (Tipicamente visibile è il bordo dell'elemento html)
- Margin (Spazio che separa l'elemento dagli altri elementi)

Domanda di esame: Distanza tra il contenuto di un elemento ed un suo genitore 
Risposta: Somma di padding + border + margin

## Bordo di un tag HTML

Separa il padding ed il margin, si definisce tramite border e si possono settare parametri quali spessore, stile e colore.

Esempio: border: 2px solid black;

## Margine di un tag HTML

Spazio che separa il tag HTML dai propri genitori o fratelli.
Si indica con margin e prevede 4 parametri: spaziatura superiore, destra, inferiore e sinistra

Esistono alternative a:
- 1 parametro: Lo applica a tutti e 4 i lati
- 2 parametri: spaziatura verticale ed orizzontale
- 3 parametri: spaziatura superiore, orizzontale ed inferiore

Nota Bene: Di default il browser può applicare un margin ed un padding, si risolve con il seguente codice CSS:

html,body {
    padding: 0;
    margin: 0;
}

## Display

Permette di gestire il rendering ed il comportamento dell'elemento, grazie a questo un div può diventare inline o uno span può diventare block.

display: inline-block cambia durante il rendering il comportamento dell'elemento

display: none permette di non renderizzare un determinato elemento