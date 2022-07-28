const  express  =  require('express');
const xss = require('../lib/index');


const app = express();

app.use(xss());

app.get("/", (req, res) => res.end("it worked"));

app.listen(5000, () => console.log("running on port "+ 5000))