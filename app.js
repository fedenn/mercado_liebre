const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app= express();

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname,'/src/views/home.html'))
});

app.listen(PORT, ()=>console.log(`Servidor escuchando en puerto ${PORT}`));
