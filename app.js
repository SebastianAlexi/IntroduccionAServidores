const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))
let direccion = function(nombre){
    return path.join(__dirname,`/views/${nombre}.html`)
}
let GET = function(url,archivo){
    return app.get(`${url}`,function(req,res){
        res.sendFile(direccion(`${archivo}`))
    })
}
app.get('/home',function(req,res){
    res.sendFile(direccion('index'))
})
app.get('/',function(req,res){
    res.sendFile(direccion('index'))
})
app.get('/babbage',function(req,res){
    res.sendFile(direccion('babbage'))
})
GET('/berners-lee','berners-lee')
GET('/clarke','clarke')
GET('/hamilton','hamilton')
GET('/hopper','hopper')
GET('/lovelace','lovelace')
GET('/turing','turing')

app.listen(3030,()=> console.log('servidor iniciado en 3030'))