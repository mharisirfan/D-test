const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));


app.use("/Img", express.static(__dirname + "/Img"));
app.use("/style", express.static(__dirname + "/style"));
app.use("/particles", express.static(__dirname + "/particles"));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
    console.log("Server is live");
})
