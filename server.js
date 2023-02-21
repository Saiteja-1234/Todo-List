const todoLib = require("./backend/Lib/todoLib");
const mongoose=require("mongoose");
const express = require('express');
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5030;

app.use(express.json());
app.use(express.static("frontend"));


app.get("/api/todos", function(req, res) {
    todoLib.getAllTodos((err,todos)=>{
        if(err){
            res.json({status : "error",message : err, data : null});
        }
        else{
            res.json({status:"Success", data : todos}); 
        }
    });
});

// create todo app api's
app.post("/api/todos", function(req, res){
	const todo = req.body;
    console.log(todo);
	todoLib.createTodo(todo, function(err, dbtodo){
		if(err){
			res.json({status: "error", message: err, data: null});
		}
		else{
			res.json({status: "success", data: dbtodo});
		}
	})
});

app.use("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
});


mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.MONGO_CONNECTION_STRING, {}, (err) => {
        if (err) {
            console.error(err);
            return;
        } // else {
        console.log("Database Connected");

        // do not create user if already exist

        // userLib.getSingleUser({ username: "Sandeep1729" })
        // connecting server with port
        app.listen(port, () => {
            console.log(`Server Running on http://localhost:${port}`);
        });
        // }
    }
);
// app.listen(port, function() {
//     console.log("Sever running on http://localhost:" + port);
// });