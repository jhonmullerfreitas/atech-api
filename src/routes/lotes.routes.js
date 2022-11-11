import { Router } from "express";

import listDetailLoteController from "../controllers/lotes/listDetailLote.controller";
import listLotesController from "../controllers/lotes/listLotes.controller";

const router = Router()

router.get('', listLotesController)
router.get('/:id', listDetailLoteController)

export default router;