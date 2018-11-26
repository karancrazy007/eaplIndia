const path = require('path')
const express = require("express");

const app = express();

app.get('/api/parts', (req, res) =>
  res.send({
    timers: [
      {
        id: 0,
        name: 'AA-01',
        imgSrc: 'aa-01.jpg',
        cost: 200,
        selected: 0,
        info: 'State of the art Timer with nanosecond-grade precision for production line activities.'
      }, {
        id: 1,
        name:'AA-02',
        imgSrc: 'aa-02.jpg',
        cost: 300,
        selected: 0,
        info: 'State of the art Timer with millisecond-grade precision for Robotic Arm based activities.'
      }, {
        id: 2,
        name:'AA-03',
        imgSrc: 'aa-03.jpg',
        cost: 400,
        selected: 0,
        info: 'State of the art Timer with microsecond-grade precision for Boiler machine based activities.'
      }, {
        id: 3,
        name:'AA-04',
        cost: 500,
        selected: 0,
        imgSrc: 'aa-04.jpeg',
        info: 'State of the art Timer with femtosecond-grade precision for Furnace and Chemical vessel based activities.'
      }
    ]
  })
);

app.post('/api/cart', (req, res) => 
  setTimeout(() => res.status(201).send(), 800)
);

app.post('/api/sign-in', (req, res) => res.status(200).send());

// app.use('/api/images', express.static('images'));

app.listen(8081, () => console.log('Server listening on port 8081!'));

