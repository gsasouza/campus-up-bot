const app = require('express')();
const cors = require('cors');
app.use(cors());
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
  res.sendFile( __dirname + '/index.html');
})

app.listen(process.env.PORT);