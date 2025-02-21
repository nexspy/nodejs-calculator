import { Router } from "express";
import { body } from "express-validator";
import { CalculateProjection } from "../controllers/ProjectionController";

const router = Router();

router.post(
	"/",
	[
		body("num_of_customers")
			.isInt({ min: 1 })
			.withMessage("Number of customers must be a positive integer"),
		body("date")
			.matches(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/)
			.withMessage("Date must be a valid ISO 8601 date"),
		body("monthly_growth_rate")
			.isFloat({ min: 0 })
			.withMessage("Monthly growth rate must be a positive number"),
		body("months")
			.optional()
			.isInt({ min: 1 })
			.withMessage("Months must be a positive integer"),
		body("adjustments").optional(),
	],
	CalculateProjection
);

export default router;
