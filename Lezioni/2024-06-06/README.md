## Backend

Javascript linguaggio con il quale possiamo sviluppare backend.

## Backend Framework

Esisotno dei framework per sviluppare applicativi web come laravel per PHP o express per JS o flask per Python

## Pacchetti e librerie

Un package manager come apt per Debian/Ubuntu e pacman per Arch permette di scaricare pacchetti e librerie dal web.
Per javascript esiste npm e per python pip.

## Backend databases

Gestisce in maniera automatica filtrando in relazione delle operazioni logiche facendo operazioni come join.
MySQL è un modello prettamente relazionale, non si possono avere tabelle dinamiche e questo è un problema.
PostgreSQL è relazionale ed un database ad oggetti, soluzione più elastica una soluzione non relazionale è MongoDB basato completamente su documenti JSON

## Esempio di richiesta backend

POST http://youirdomani.com/orders
{
 order:[
 {
 id : 12345
 name : "Nintendo Switch",
 quantity : 1
 }
 ],
 paymentMethod : "paypal"
}

## API 

La lista di tutte le possibili richieste che è possibile effettuare al backend prendono il nome di Application Program Interface. Concetto fondamentale nello sviluppo backend.

## API REST

API con Rappresentazione del Trasferimento di Stato, sono API che rappresentano lo stato della stessa API ed è la base dello sviluppo backend lato web, non sono un protocollo ma un modo di rappresentare un'architettura di operazioni.
Le RPC (Remote Procedure Call) simili alle rest API sono alla base dello sviluppo videoludico online che permettono al client di eseguire un metodo e richiamare lo stesso metodo mediante rete a tutti gli altri client.

## Infrastruttura Backend

Ad oggi non si va ad acquistare il dispositivo in se ma delle macchine virtuali che sfrutta le risorse richieste con costi decisamente minori rispetto ad un bare-metal si vanno a pagare costi minori relativi solo ai costi di rete etc... 
Non conviene avere una sola macchina che si prende carico di tutte le richieste di rete per evitare attacchi DDOS. Meglio acquistare diverse macchine virtuali distribuite in più regioni che si prendono carico di tutte le richieste.

Si sfrutta l'architettura di microservizi che sono pensate appositamente per una operazione (un servizio che sta su una potrta X che gestisce gli ordini, un altro sulla porta Y che gestisce solo i pagamenti...).
Ogni servizio è gestibile singolarmente anche con tecnologie differenti

Questo permette di sviluppare servizi in primis con lingiaggi ad alto livello per poi svilupparle parallelamente con linguaggi a basso livello migliorando le prestazioni del sistema.