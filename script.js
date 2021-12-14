window.onload = function() {

    document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('lista')
    

}



//Adiciona tarefa e limpa o input

let addBtn = document.getElementById('criar-tarefa')

addBtn.addEventListener('click', criaTask)

function criaTask () {
    let task = document.createElement('li')
    task.className = 'task-item'
    task.style.width = '250px'
    task.style.textAlign = 'left'
    task.style.padding = '5px'
    task.innerHTML = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(task)
    
    document.getElementById('texto-tarefa').value = ''
    
    
    
    //Seleciona tarefa
    
    let tasks = document.getElementsByClassName('task-item')
    
    
    for (index of tasks) {
        index.addEventListener('click', mudaCor)
   index.addEventListener('dblclick', riscaTarefa) }
   
}

//Adiciona tarefa com enter e limpa o input
//Parte do código usada do link https://www.codegrepper.com/code-examples/javascript/javascript+enter+key+event

let entTask = document.getElementById('texto-tarefa')

entTask.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let task = document.createElement('li')
        task.className = 'task-item'
        task.style.width = '250px'
        task.style.textAlign = 'left'
        task.style.padding = '5px'
        task.innerHTML = document.getElementById('texto-tarefa').value;
        document.getElementById('lista-tarefas').appendChild(task)
        
        document.getElementById('texto-tarefa').value = ''

    //Seleciona tarefa
    
    let tasks = document.getElementsByClassName('task-item')
    
    
    for (index of tasks) {
        index.addEventListener('click', mudaCor)
   index.addEventListener('dblclick', riscaTarefa) }
    }
});



function mudaCor (event) {
    
    if (document.getElementsByClassName('selected').length == 0){
        event.target.classList.add('selected')
    } else if (document.getElementsByClassName('selected').length > 0) {
        let current = document.querySelector('.selected')
        current.classList.remove('selected')
        event.target.classList.add('selected')
    }
    
}

//Risca


function riscaTarefa (event) {
    event.target.classList.toggle('completed')
    event.target.innerText = event.target.innerText + '✔️'
}



//Remove finalizados

let fin = document.getElementsByClassName('completed')
let clearFin = document.getElementById('remover-finalizados')
clearFin.addEventListener('click', limpaFin)


function limpaFin () {

    //Loop while extraído do Code Greeper (não consegui achar o link)
    
    while(fin.length > 0){
        fin[0].parentNode.removeChild(fin[0]);
    }
}

//Remove selecionado

let sel = document.getElementsByClassName('selected')
let clearSel = document.getElementById('remover-selecionado')
clearSel.addEventListener('click', limpaSel)


function limpaSel () {
    
    //Loop while extraído do Code Greeper (não consegui achar o link)
    
    while(sel.length > 0){
        sel[0].parentNode.removeChild(sel[0]);
    }
}



//Apaga tudo 

let clearBtn = document.getElementById('apaga-tudo')
clearBtn.addEventListener('click', apagaTd) 

function apagaTd () {
    document.getElementById('lista-tarefas').innerHTML = ''
}

//Salva lista
let saveBtn = document.getElementById('salvar-tarefas')
saveBtn.addEventListener('click', salvaLista)
let list = document.getElementById('lista-tarefas')

function salvaLista () {
    localStorage.clear();
    localStorage.setItem('lista', list.innerHTML)
}

//Move cima
//Referencia https://www.ti-enxame.com/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/

let upBtn = document.getElementById('mover-cima')
upBtn.addEventListener('click', moveCima)

function moveCima () {
    let selTask = document.querySelector('.selected')
    if (selTask != document.getElementsByClassName('task-item')[0] && document.querySelectorAll('.selected').length > 0){
    list.insertBefore(selTask, selTask.previousSibling)
    }
}

//Move baixo

let downBtn = document.getElementById('mover-baixo')
downBtn.addEventListener('click', moveBaixo)

function moveBaixo () {
    let selTask = document.querySelector('.selected')
    if (selTask != document.getElementsByClassName('task-item')[(document.querySelectorAll('.selected').length) - 1] && document.querySelectorAll('.selected').length > 0) {
    list.insertBefore(selTask.nextSibling, selTask)
}
}