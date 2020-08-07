const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = `mongodb+srv://track:${process.env.DB_PASSWORD}@track.g6ido.mongodb.net/trackDb?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.log('Error connection to mongo', err);
})

app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});