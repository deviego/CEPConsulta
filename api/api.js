

const api = require('axios')
const { error } = require('console')
let cep = 25267-141
const url = "https://viacep.com.br/ws/" + this.cep+"/json"

 export function getCep() {
    api.get(url).then(res => { 
        console.log(res)
    }).catch()
};
