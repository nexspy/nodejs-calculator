import { expect } from "chai";
import {
	ProjectionResponse,
	ProjectionService,
} from "../src/services/ProjectionService";

describe("Projection Service Test", () => {
	it("should return a number", () => {
		const result: ProjectionResponse[] =
			ProjectionService.calculateProjection(100, "20/01/2025", 5.5, 5);

		expect(result[0]?.value).is.a("number");
	});

	it("should return a 15", () => {
		const result: ProjectionResponse[] =
			ProjectionService.calculateProjection(5, "21/02/2025", 2, 5);

		expect(result[0]?.value).equal(15);
	});

	it("should return a negative number for negative input", () => {
		const result: ProjectionResponse[] =
			ProjectionService.calculateProjection(-100, "12/01/2025", 5.5, 5);

		expect(result[0]?.value).is.below(0);
	});

	it("should allow adjustment for growth rate where result for growth rate should be greater", () => {
		const result: ProjectionResponse[] =
			ProjectionService.calculateProjection(100, "12/01/2025", 5.5, 5);

		const resultWithAdjustments: ProjectionResponse[] =
			ProjectionService.calculateProjection(100, "12/01/2025", 5.5, 5, [
				{
					date: "12/4/2025",
					growth_rate: 6.5,
				},
			]);

		expect(
			resultWithAdjustments[resultWithAdjustments.length - 1]?.value
		).is.greaterThan(result[result.length - 1]?.value);
	});
});

describe("Convert to Date Test", () => {
	it("should return a date object", () => {
		const result: Date = ProjectionService.convertToDate("20/01/2025");

		expect(result).is.a("Date");
	});
});
