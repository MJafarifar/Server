const express = require('express');
const cors = require('cors')
const app = express();
var bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/login', (req, res) => {
if(req.body.username=="user" && req.body.password=="user")
{
  res.send({
    token: true,
  });
}
else{
    
    res.send({
        token: false
});
}

});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));