const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = document.getElementsByClassName(".nxt-btn");
const preBtn = document.getElementsByClassName(".pre-btn");
let index = 0;


    nxtBtn.addEventListener('click', function() {
        index++
        if(index==productContainers.length){
            index=0
        }
        display(productContainers[index])
    })
    nxtBtn.addEventListener('click', function() {
        index--
        if(index<0){
            index==productContainers.length-1
            
        }
        display(productContainers[index])
    })