const express = require('express');
const app = express();

const port = process.env.PORT || 9030;

app.use(express.static("frontend"));


app.get("/api/todos", function(req, res) {
    res.json([
        { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }, { name: "todo1", iscompleted: true }
    ]);
});

app.use("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
});



app.listen(port, function() {
    console.log("Sever running on http://localhost:" + port);
});