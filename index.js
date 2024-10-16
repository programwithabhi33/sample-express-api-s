import express from "npm:express"
import bodyParser from "npm:body-parser"
const app = express()
const port = 3000

// Use body-parser middleware
app.use(bodyParser.json()); // For parsing JSON bodies
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
  let responseData = {name: "John Doe", hobby: "Programming"}
  console.log(req.query.name)
  res.json(responseData)
})
app.post('/post', (req, res) => {
  //console.log('req headers is:', req.headers);
  res.json(req.body)
})
app.post('/post-with-form-data', (req, res) => {
  console.log('req body is:', req.body);
  res.send(req.body);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
