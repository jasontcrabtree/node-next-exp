const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = require('./queries');

// const port = 3020;

// let port = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/server', (request, response) => {
  response.json({ info: 'Node.js, Express and Postgres API' });
});

app.get('/', (request, response) => {
  response.json({ info: 'Hello World' });
});

// app.get('/', db.getUsers);
// app.get('/users', db.getUsers);
// app.get('/users/:id', db.getUserById);
// app.post('/users', db.createUser);
// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser);

let port = process.env.PORT;
if (port === null || port === '') port = 8000;

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`App running on port http://localhost:${port}`);
// });
