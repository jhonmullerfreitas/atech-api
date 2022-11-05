import express from "express"

import lotesRouter from "./routes/lotes.routes"
import pesosRouter from "./routes/pesos.routes"
import caRouter from "./routes/conversaoAlimentar.routes"
import mortalidadeRouter from "./routes/mortalidades.routes"

const app = express();
app.use(express.json());


app.use("/lotes", lotesRouter);
app.use("/pesos", pesosRouter);
app.use("/mortalidades", mortalidadeRouter);
app.use("/conversao-alimentar", caRouter)


const port = 3000;
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});