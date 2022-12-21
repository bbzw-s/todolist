# Todo List M133

Diese Repository enthält das Todolist Projekt von Lian Studer, Elias Amstein, Ghiath Sardast und Kris Huber. In diesem README finden Sie alle nötigen Zusatzinformationen.

## Ordnerstruktur

- **client/**: Enthält das Frontend Projekt. Dieses wurde mit React.js erstellt. Wichtig: Der Code für die Datenabfrage, ist unter dem Pfad `client/src/DataContext.tsx` zu finden. Der relevante Code ist mit Kommentaren beschrieben.

- **service/**: Enthält das Backend Projekt, erstellt mit Node.js und Express.

## Starten der App

Zuerst müssen in beiden Unterordnern (`service` und `client`) separat alle Abhängikeiten mit dem Befehl `npm install` installiert werden.

Um die App zu starten, muss in beiden Unterordnern (`service` und `client`) der Befehl `npm start` ausgeführt werden. Danach ist die App im Browser unter `localhost:5173` zu finden. (Port kann variieren, bitte auf Konsolenausgabe achten beim starten)