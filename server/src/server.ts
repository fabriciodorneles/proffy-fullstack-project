import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    const users = [
        {name: 'Diego', age: 25 },
        {name: 'Fara', age: 42 }
    ];
    return response.json(users);
});

app.listen(3333);