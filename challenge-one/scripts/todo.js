/*const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");

inputaddEventListener("keypress", function(keyPressed) {
    if(keyPressed.which === 13){
        const li = document.createElement("li");
        const spanElement = document.createElement("span")
        const icon = document.createElement("i");

        const newTodo = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement,newTodo);

        deleteTodo();

    }
});

function deleteTodo() {
    for(let span of spans) {
        span.addEventListener ("click", function() {
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false
);

const saveButton = document.querySelector(".save");
const clearButton = document.querySelector(".clear");

saveButton.addEventListener('click', function() {
    localStorage.setItem('todoList', ul.innerHTML);
});

clearButton.addEventListener('click', function() {
    ul.innerHTML = " ";
    localStorage.removeItem('todoList', ul.innerHTML);
});

function loadTodo() {
    if(localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
} */

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }