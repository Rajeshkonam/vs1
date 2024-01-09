let container = document.getElementById("container1")

let h1 = document.createElement("h1");
h1.textContent = "1.0 Technologies";
container.appendChild(h1);

let btn = document.createElement("button");
btn.textContent = "change style";
container.appendChild(btn)
btn.onclick = function() {
    h1.textContent = "2.0 Technologies";
    h1.classList.add("a");
}

//h1.style.color="orange";                //we can add using class atrribute also by
//h1.style.fontFamily="caveat";           //h1.classList.add("x")


let btn2 = document.createElement("button");
btn2.textContent = "Delete Style"
container.appendChild(btn2)
btn2.onclick = function() {
    h1.classList.remove("a")
}