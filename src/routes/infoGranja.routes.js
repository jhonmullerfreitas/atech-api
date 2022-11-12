import { Router } from "express";
import infoGranjaController from "../controllers/infoGranja/infoGranja.controller";

const router = Router();

router.get("", infoGranjaController);

export default router;