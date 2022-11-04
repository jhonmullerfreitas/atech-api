import express from "express"
import lotesRouter from "./routes/lotes.routes"

const app = express();
app.use(express.json());


app.use("/lotes", lotesRouter)


const port = 3000;
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});