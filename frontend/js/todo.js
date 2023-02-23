console.log("hello from js");
document.getElementById("loader").style.display = "block";
const inputbox=document.getElementById("inputBox");
inputbox.addEventListener("keydown",function(event){
     if(event.keyCode==13){
            createTodo(inputbox.value)
     }
});

async function createTodo(text){
    await fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({taskName:text})});
    await getAllTodos();
}
async function getAllTodos(){
    const todoresult = await fetch("/api/todos");
    const todos = await todoresult.json();
    // alert(JSON.stringify(todos));
    console.log(todos);

    const todoList = document.getElementById("todoList");

    todoList.innerHTML = null;
    document.getElementById("todoCount").innerHTML = todos.data.length;
        
        todos.data.forEach((el, index) => {
       
            let listItem = document.createElement("li");
            let labelItem = document.createElement("label");
            let inputItem = document.createElement("input");
            let buttonItem = document.createElement("button");

            // * CREATING THE DELETE BUTTON
            buttonItem.classList.add("btn");
            buttonItem.classList.add("btn-outline-danger");
            buttonItem.innerHTML = `<i class="fas fa-close fa-lg fa-fw"><form action="/api/todos/${el._id} method="delete"><input type="</i>`
            buttonItem.setAttribute("onclick", `deleteTodo("${el._id}")`)

            // * CREATING THE CHECKBOX
            inputItem.classList.add("form-check-input")
            inputItem.classList.add("me-1")
            inputItem.type = "checkbox";
            inputItem.value = "";
            inputItem.setAttribute("onclick", `setChecked("${el._id}")`)
            inputItem.id =`Checkbox${index}`
        
            
            // * CREATING THE TEXT LABEL
            let textNode = document.createTextNode(el.taskName);
            labelItem.classList.add("form-check-label");
            labelItem.setAttribute("for",`Checkbox${index}`)
            labelItem.appendChild(textNode);
            labelItem.setAttribute("data-name", `${el._id}`);

            if (el.isCompleted) {
                labelItem.classList.add("crossed")
                inputItem.setAttribute("checked", "true")
            }
            
            // * ADDING BOOTSTRAP CLASSES TO THE LIST ITEM <LI> TAG
            listItem.classList.add("list-group-item")
            listItem.classList.add("my-list-item")

            listItem.appendChild(inputItem);
            listItem.appendChild(labelItem);
            listItem.appendChild(buttonItem);

            todoList.appendChild(listItem);
        })  
        document.getElementById("loader").style.display = "none";


}
getAllTodos();

// change an attribute of html tag 
var light = true;

// change innerhtml of themebutton to Sun icon
function setTheme() {
    if (light) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-sun fa-lg fa-fw"></i>';
    }
    else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-moon fa-lg fa-fw"></i>';
    }
    light = !light;
}