import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const CalculateProjection = (req: Request, res: Response): void => {
	// Check for validation errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() });
		return;
	}

	// Get input from post
	const { num_of_customers, date, monthly_growth_rate } = req.body;

	console.log("Input:");
	console.log("Number of customers: " + num_of_customers);

	// Calculate projection

	// Send response
	res.status(200).send("Calculating projection");
};
