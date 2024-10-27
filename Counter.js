// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const restBtn = document.getElementById('restBtn');
const increaseBtn = document.getElementById('increaseBtn');
const Count = document.getElementById('Count');
let count = 0

decreaseBtn.onclick = function(){
    count--;
    Count.textContent = count}
increaseBtn.onclick = function(){
    count++;
    Count.textContent = count}
restBtn.onclick = function(){
    count = 0
    Count.textContent = count}
