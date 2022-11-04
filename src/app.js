import express from "express"

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello, express!');
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`);
});


