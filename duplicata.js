const { response } = require("express");
const axios = require('axios');


const response = 'http://localhost:8585/product'
const json = JSON.parse(response);
     

const arrayUnicos = new Map();

json.forEach((id) => {
    if (!arrayUnicos.has(id.dataCadastro)){
        arrayUnicos.set(id.dataCadastro, id);
    }
});

console.log([...arrayUnicos.values()])