//display the color
document.querySelector('span').innerText = "" + document.body.style.backgroundColor;
//get the button and add an event listener
let btn = document.querySelector('button');
btn.addEventListener("click",randomColor);
//create a function
function randomColor(){
    let color = "#";
    let colorSelector = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    for(let i = 0;i<6;i++){
        let randomIndex = Math.floor(Math.random()*16);
        color += colorSelector[randomIndex];

    }
    document.body.style.backgroundColor = color;
    document.querySelector('span').innerText = color;
}
