import express from "express"
import cors from "cors"

import lotesRouter from "./routes/lotes.routes"
import pesosRouter from "./routes/pesos.routes"
import caRouter from "./routes/conversaoAlimentar.routes"
import mortalidadeRouter from "./routes/mortalidades.routes"
import pesoMedioSexoRouter from "./routes/pesoMedioSexo.routes"
import morteMediaSexoRouter from "./routes/morteMediaSexo.routes"
import infoGranjaRouter from "./routes/infoGranja.routes"

const app = express();
app.use(cors())
app.use(express.json());


app.use("/lotes", lotesRouter);
app.use("/pesos", pesosRouter);
app.use("/mortalidades", mortalidadeRouter);
app.use("/conversao-alimentar", caRouter)
app.use("/peso-medio-sexo", pesoMedioSexoRouter)
app.use("/morte-media-sexo", morteMediaSexoRouter)
app.use("/info-granja", infoGranjaRouter)


const port = 3001;
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});