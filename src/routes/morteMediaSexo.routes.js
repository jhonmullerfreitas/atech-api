import { Router } from "express";
import morteMediaSexoController from "../controllers/morteMediaSexo/morteMediaSexo.controller";

const router = Router();

router.get("", morteMediaSexoController);

export default router;