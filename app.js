/* var number = 2;
s = '2'

const comparador = (data1, data2) => {
    if(data1 === data2){
        console.log('iguales');
    }else{
        console.log('diferentes');
    }
}

comparador(s, number);
*/

const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
//const numeros = require('./dummy');
const usuarios = require('./dummy');

const app = express();  //Crea una instancia
//const port = 8000;
//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS

//Rutas
app.get('/', (req, res)=>{
    res.status(200).send('<div><h1>Hola Mundo!</h1> <p> Curso AWS - ESP32 </p> </div>');
});

app.get('/Homepage', (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
const data = {
    message: 'datos',
    payload: {
        temperatura: '20',
        presion: '1'
    }
}

/*app.get('/data', (req, res)=>{
    res.status(200).send(data);
}*/

/*
//Ordena los números del arreglo en dummy
app.get('/data', (req, res)=>{
      res.status(200).send(numeros.sort((a,b) => a - b));
}
*/  
//Imprime los usuarios en orden
console.log(usuarios);

app.get('/data', (req, res)=>
{
    res.status(200).send(usuarios.sort((a,b) => {
        return a.id - b.id;
    }))
});

app.get('/users/:id', (req, res)=>
{
    const id = req.params.id;
    var user = {};
    for(let u of usuarios){
        if(u.id == id){
            user = u;
        }
    }
    res.status(200).send(user.nombre);
});
  /*  
app.get('/users/claves', (req, res)=>
{
    var nClave = '';
    var cont = 1;
    var cRef = '';
/*
    //console.log('Claves');
    for(let c of user.clave){
        console.log(cRef);
        
        //if(c === cRef){
        //    cont = cont + 1;
        }/* else {
            nClave = nClave + String(cont);
            cRef=c;
        }
    }
    console.log(nClave);
    res.status(200).send(nClave);

    const comprimirCadena 0 (cadena) => {
        var cRef = '';
        var contador = 0;
        var cntCadena = 0;
        var nuevaCadena = '';

        for(let c of cadena){
            cntCadena = cntCadena+1;
            if(c === cRef){
                contador = contador + 1;
            } else{
                nuevaCadena= nuevaCadena+cRef;
                if(contador>0) nuevaCadena = nuevaCadena + String(contador);
                cRef = c;
                contador=0;
            }
            isFinite(cntCadena===cadena.lenght){
                nuevaCadena=nuevaCadena+c;

            }
        }
        return nuevaCadena;
    }
});

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    var user = {};
    for(let u of usuarios){
        if (u.id == id){
            user = u;
        }
    }
    var nuevaClave = '';
    var contador = 1;
    var cRef = '';
    for(let c of user.clave){
        if(c==cRef)
        {
            contador++;
        }
        else if(contador==1)
        {
            cRef=c;
            nuevaClave=nuevaClave + cRef;
            
        }
            else
            {
            cRef=c;
            nuevaClave= nuevaClave + String(contador)+ cRef;
            contador=1;
            }
    
    }
    console.log(nuevaClave);
    res.status(200).send(nuevaClave);
});
*/
/*app.get('archivos',(req,res)=>{
    const testFolder = './server/';
    const fs = require('fs');

    fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    }
    res.status(200).send();
}});*/
const directory = './server/';
const fs = require('fs');

fs.readdir(directory, (err, files) => {
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
    })
});
module.exports = app;