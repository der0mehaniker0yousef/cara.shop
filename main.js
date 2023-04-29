const baropen = document.getElementById('bar');
const navopen = document.getElementById('navbar');
const closenav = document.getElementById('close');

if(baropen){
    baropen.addEventListener("click", () => {
        navopen.classList.add('open');
    }
)}

if(closenav){
    closenav.addEventListener("click", () => {
        navopen.classList.remove('open');
    }
)}