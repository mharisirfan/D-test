const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));


app.use("/Img", express.static(__dirname + "/Img"));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
    console.log("Server is live");
})
