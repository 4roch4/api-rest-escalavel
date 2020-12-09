const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const config = require('config')

app.use(bodyParse.json())


app.listen(3000, () => console.log(`Api rodando na porta 3000`))