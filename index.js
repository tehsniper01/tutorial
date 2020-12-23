//Required modules
const express = require("express");

//telling the app to use express, the () at the end of express tells it to execute the code
const app = express();

//extract data from the form
app.use(express.urlencoded({ extended: true }));

//Adds the static routing for the stylesheet
app.use("/static", express.static("public"));

//setting the view engine to EJS
app.set("view engine", "ejs");

//performing a GET funtion to display some text to the browser while the app is running
app.get('/', (req, res) => {
    //sending the response to the browser
        //res.send("Hello World!");
    //rending the page using the todo.ejs file
    res.render('todo.ejs');
});

//posting data to the form, to be hooked upto MongoDB
app.post('/',(req, res) => {
    console.log(req.body);
    });

//telling the app to listen on port 3000 and to output 'Listening on port 3000' to the console
app.listen(3000, () => console.log("Server is listening on port 3000"));
