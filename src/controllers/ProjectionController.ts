import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
	ProjectionResponse,
	ProjectionService,
} from "../services/ProjectionService";

export const CalculateProjection = (req: Request, res: Response): void => {
	// Check for validation errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() });
		return;
	}

	// Get input from post
	const { num_of_customers, date, monthly_growth_rate, months, adjustments } =
		req.body;

	// Calculate projection
	const projection: ProjectionResponse[] =
		ProjectionService.calculateProjection(
			num_of_customers,
			date,
			monthly_growth_rate,
			months,
			adjustments
		);

	// Send response
	res.status(200).json({
		projection,
	});
};
