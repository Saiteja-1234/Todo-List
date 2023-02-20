console.log("hello fron js");

document.getElementById("loader").style.display = "block";



fetch('/api/todos')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data);
        document.getElementById("loader").style.display = "none";

        document.getElementById('todoCount').innerHTML = data.length;

    });

var light = true;

function setTheme() {
    if (light) {
        document.documentElement.setAttribute("data-bs-theme", 'dark');
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
    }
    light = !light;
}