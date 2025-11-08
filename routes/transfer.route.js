import { Router } from "express";
import { checkTransferStatus, initiateTransfer, validateName } from "../controllers/transfer.controller.js";

const router = Router();

router.post("/validate-name", validateName);
router.post("/initiate", initiateTransfer);
router.post("/status", checkTransferStatus);

export default router;