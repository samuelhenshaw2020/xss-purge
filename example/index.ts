import xss from "xss-purge"
import express from 'express'


const app = express();


app.use(xss())

app.get("/", (req, res) => res.status(200).send("i worked"))


app.listen(2000, () => console.log("app running"))