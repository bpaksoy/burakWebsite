const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


// const ejs = require('ejs');
// app.set('view engine', 'ejs');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const bodyParser = require('body-parser');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function(req, res, next){
  res.render("index");
});
app.get("/about_us", function(req, res, next){
  res.render("about_us.html");
});
app.get("/contact", function(req, res, next){
  res.render("contact.html");
});
app.get("/projects", function(req, res, next){
  res.render("projects.html");
});

app.listen(port, function(){
  console.log("Listening on "+ port);
})
