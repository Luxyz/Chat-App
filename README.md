# Chat 💬 

Projeto desenvolvido para o trabalho semestral do 5º semestre de Ciência da Computação na UNIP-Campinas.

# Sobre 📘

Geralmente estavamos acostumados a sempre fazer o trabalho semestral com Java, porém, nesse semestre fomos permitidos de usar qualquer linguagem e por isso decidimos usar uma das linguagens que mais vem crescendo no mundo - JavaScript.
Essa linguagem tem dominado o mercado web e junto com os incríveis frameworks está se tornando cada mais mais essencial e obrigatória para desenvolvimento web.
Por toda essas razões, decidimos usar ela, junto ao framework [*React*](https://reactjs.org) para o front-end e o [*Node*](https://nodejs.org/en) para o back-end.

# Objetivo 📋

O objetivo era criar uma aplicação que permita que duas ou mais pessoas possam se comunicar em uma rede, utilizando o protocolo TCP/IP.

# Como rodar localmente 📂
Obs. Estamos supondo que você já tenha o [node js](https://nodejs.org/en) intalado na sua máquina

Primeiramente clone o repositorio usando: 
```
git clone https://github.com/kellydena/Chat_RC.git
```
Em seguida você terá que ir tanto na pasta *"client"* e *"server"* e rodar o seguinte comando:
```javascript
npm install
```

Você já deve ter tudo que precisa. Abra a pasta *"client"* e rode:
```
npm start
```
E por fim, na pasta *"server"* rode:
```
npm start
```

Pronto, agora abra quantos *"localhosts"* quiser e teste a aplicação

# Como funciona? 🙋
##### React JS
React é um framework que tem o objetivo de facilitar o desenvolvimento em diversas plataformas, inclusive o mobile se usado o React Native.  
As duas principais vantagens de se utilizar essa tecnologia são os chamados *componentes* e o que chamamos de *single-page-application*  
Sobre componentes, eles são pedaços de código que podem ser utilizados em qualquer outro lugar apenas importando eles, o que facilita muito em casos de estruturas muito repetidas como botões, text-fields, etc.  
Single Page Application é um conceito que diminui o trafego de dados, assim, os economizando.  
Antigamente, quando se fazia um request para o servidor, ele retornava o HTML/CSS/JavaScript construído. Já com o React, esse código é feito na parte do cliente e quando se faz um request, apenas um arquivo JSON ou um processo de uma ação serão recebidos. 

##### Node JS
Node JS é uma tecnologia que pode ser utilizada para desenvolver servidores. Como é usado JavaScript, muitas semelhanças podem ser notadas e acredito que a maior vantagem seja poder utilizar a mesma linguagem para tanto o front-end quanto o back-end.

##### Socket.io
Como dito anteriormente, esse projeto foi feito para comunicação utilizando o protocolo TCP/IP  
Por isso foi implementado a biblioteca [socket.io](https://socket.io).  
Essa biblioteca permite comunicação em tempo real, bidirecionada e baseada em evento.  
Basicamente, ela funciona tentando estabelecer um [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) se possível, caso não recorrerá a um long polling HTTP. Mais sobre ela, em sua [documentação](https://socket.io/docs/v4).

##### Principio da comunicação
A comunicação usada pelo Socket.io funciona dando um ip de broadcast para todos os clientes ou para um conjunto deles(Salas privadas). Em nosso programa, usamos somente salas públicas. Para isso foi usado o seguinte código:  
![image](https://user-images.githubusercontent.com/62115215/118284285-a58d3e00-b4a6-11eb-8d1e-8fa164e5ee1e.png)  
Esse pedaço de código(feito no servidor) irá transmitir para qualquer socket conectado a mensagem que no caso é a *data*.
