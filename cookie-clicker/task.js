const pechenka = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

pechenka.onclick = () => {
    if(Number(counter.textContent) % 2 === 1) {
        pechenka.width +=20;
    } else {
        pechenka.width -=20;
    }
    counter.textContent = Number(counter.textContent) + 1;
}