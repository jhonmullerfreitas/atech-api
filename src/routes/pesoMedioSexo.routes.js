import { Router } from "express";
import pesoMedioSexoController from "../controllers/pesoMedioSexo/pesoMedioSexo.controller";

const router = Router();

router.get("", pesoMedioSexoController);

export default router;
