const express = require("express");
const path = require("path");
const app = express();

//middleware
app.use(express.static(__dirname + '/dist/listing'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/listing/index.html'))
})

//listen to app
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

