const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = () =>  3000;
const route = require ('./src/routes');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen( port(), () => {
  console.log(`App running on port ${port()}.`)
});


//URL LINKS -- GET ALL LINKS
app.get('/:id', route.getLinksById);





