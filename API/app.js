const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const sendGrid = require ('@sendgrid/mail');
const { text } = require('body-parser');
const app = express ();


app.use(bodyParser.json());

app.use(cors());

app.use((req,res, next) => {
    res.setHeader ('Access-Control-Allow_Origin', '*');
    res.setHeader ('Acesss-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader ('Access-Control-Allow-Headers', 'Content-Type, Authorization');

});


app.get('/api', (req, res, next) => {
    res.send('API Status: Running')

});

app.post('/api/email', (req,res, next) => {
   sendGrid.setApiKey('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');
   const msg= {
       to: 'Fawad_a@outlook.com',
       from: req.body.email,
       subject: 'Project',
       text: req.body.message 
   }


   sendGrid.send(msg)
   .then(result => {
       res.status(200).json({
           success: true
       });
   })

   .catch(err => {
       console.log('error: ', err);
       res.status(401).json({
           success: false
       });

   });

});


app.listen(3500, '0,0,0,0')