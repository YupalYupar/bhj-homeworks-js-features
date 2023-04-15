const p = document.getElementById('timer')
let timer = setInterval(() => {
    p.textContent = Number(p.textContent)-1;
    if(Number(p.textContent) === 0) {
        alert ('Вы победили в конкурсе');
        clearInterval(timer);
    }
},1000);