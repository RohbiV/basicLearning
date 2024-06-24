// using drag and drop feature in js

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empties");


fill.addEventListener("dragstart",dragStart);
fill.addEventListener("dragend",dragEnd);


//looping through the items
for(const empty of empties) {
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragleave",dragleave);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("drop",dragDrop);
}


function dragStart() {
    this.className += " hold";
    setTimeout(()=>(this.className="invisible"),0);
}

function dragEnd() {
    this.className = "fill";
}


//functions for empties event listeners

function dragOver(e) {
    e.preventDefault();
}

function dragleave(e) {
    e.preventDefault();
    this.className = "empties";
}

function dragEnter() {
    this.className += " hovered";
}

function dragDrop(e) {
    e.preventDefault();
    this.className = "empties";
    this.append(fill);
}
