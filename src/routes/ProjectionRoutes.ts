import { CalculateProjection } from "../controllers/ProjectionController";
import { Router } from "express";

const router = Router();

router.post("/", CalculateProjection);

export default router;
