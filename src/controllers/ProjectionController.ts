import { Request, Response } from "express";

export const CalculateProjection = (req: Request, res: Response) => {
	// get input from post
	const { body } = req;

	console.log("Input:");
	console.log(body);

	// values coming in body are num_of_customers, date, and monthly_growth_rate

	// validation

	// calculate projection

	// res.status(200).json("Calculating projection");
	res.status(200).send("Calculating projection");
};
