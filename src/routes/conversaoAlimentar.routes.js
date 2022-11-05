import { Router } from "express";
import listAllConvAlimenController from "../controllers/convAlimen/listAllConvAlimen.controller";
import listConvAlimenController from "../controllers/convAlimen/listConvAlimen.controller"

const router = Router();

router.get("/:id", listConvAlimenController);
router.get("", listAllConvAlimenController);

export default router;
