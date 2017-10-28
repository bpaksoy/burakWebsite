const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const ejs = require('ejs');
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use( express.static( "public" ) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function(req, res, next){
  res.render("index");
});
app.get("/about_us", function(req, res, next){
  res.render("about_us");
});
app.get("/contact", function(req, res, next){
  res.render("contact");
});
app.get("/projects", function(req, res, next){
  res.render("projects");
});

app.listen(port, function(){
  console.log("Listening on "+ port);
})
