const app = require('express')();

let value = '';

app.get('/on', (req, res)=>{
  value = 'on';
  res.send('Ligando...');
})

app.get('/off', (req, res)=>{
  value = 'off';
  res.send('Desligando...')
})

app.get('/', (req, res)=>{
  res.send(value);
})

app.listen(process.env.PORT)