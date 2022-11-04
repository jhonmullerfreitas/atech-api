import express from "express"
import listLotesController from "./controllers/listLotes.controller";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello, express!');
});

app.get('/lotes', listLotesController)

const port = 3000;

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`);
});


