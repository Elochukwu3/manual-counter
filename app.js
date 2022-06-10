//  declarations
let value = document.querySelector(".value");
let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");
let decrease = document.querySelector(".decrease");
let count= 0;


// adding functionalities

let increasing= ()=>{
    value.textContent = count++;
}
const decreasing= ()=>{
    if (value.textContent < 0) {
        count = 0
    } else {
        if (value.textContent > 0) {
            count= count -1;
        }
    }
    value.textContent = count;
  
}
const reseting= ()=>{
    count = 0
    value.textContent = count;
}
