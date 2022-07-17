

const express = require('express')

let app = express()

const api = require('axios')

let cep = 25267141
const url = "https://viacep.com.br/ws/" +cep+"/json"

api.get(url).then( response => { 
    return response = console.log(response)
})

app.use((req,res) => {
     return res.json({message:"ok"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server is runing in ${PORT}`)) 