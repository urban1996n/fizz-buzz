# FizzBuzz boilerplate

### Prerequisites
`Node` - środowisko uruchomieniowe do javascript (w wierszu poleceń) i `npm` - manager pakietów javascript.
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

### JEST
Dokumentacja - https://jestjs.io/docs/getting-started

Używasz npm nie yarn, oba to są manager pakietów do javascript, ale żebyś nie musiał dodatkowo instalować yarn to
tutaj jest projekt skonfigurowany w npm.

Ogólnie nazewnictwo jest `nazwa_pliku_ktory_testujesz` `.spec.js` albo `.test.js`
W tym pliku z testem jest import odpowiednich części modułu z `require('@jest/globals');` żeby typowanie działało odpowiednio.
Bez tego też będzie test działał ale nie będzie Ci podpowiadać.

### KATA - ćwiczenia
https://codingdojo.org/kata/ tutaj jest dość dużo, niektóre bardziej skomplikowane, niektóre nawet łatwiejsze (jedno znalazłem) niż to co robiliśmy razem.

https://codingdojo.org/kata/Hello/ - najprostsze jakie może istnieć :P 

Pamiętaj o TDD jak je będziesz robić. To jest the ultimate gamechanger :D.

### Co Ci się może przydać
Co to jest node - https://www.youtube.com/watch?v=uVwtVBpw7RQ
Jak używać modułów - jest kilka "typów", najprosztszy to CommonJS, tak samo go używaliśmy razem:
https://nodejs.org/api/modules.html#modules-commonjs-modules, wystarczy że przeczytasz akapity do "Enabling" włącznie.
https://nodejs.org/api/modules.html#the-module-object i to przeczytaj aż do `module.filename` - wyłączając ten akapit.
jak używać npm do instalowania zewnętrznych pakietów - jakbyś potrzebował instalować jakieś paczki, prawdopodobnie nie będziesz musiał - https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager
