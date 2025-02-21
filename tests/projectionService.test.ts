import { expect } from "chai";
import {
	ProjectionResponse,
	ProjectionService,
} from "../src/services/ProjectionService";

describe("Projection Service Test", () => {
	it("should return a number", async () => {
		const result: ProjectionResponse[] =
			ProjectionService.calculateProjection(100, "20/01/2025", 5.5, 5);

		expect(result[0]?.value).is.a("number");
	});

	it("should return a 15", async () => {
		const result: ProjectionResponse[] =
			ProjectionService.calculateProjection(5, "21/02/2025", 2, 5);

		expect(result[0]?.value).equal(15);
	});

	it("should return a negative number for negative input", async () => {
		const result: ProjectionResponse[] =
			ProjectionService.calculateProjection(-100, "12/01/2025", 5.5, 5);

		expect(result[0]?.value).is.below(0);
	});
});

describe("Convert to Date Test", () => {
	it("should return a date object", async () => {
		const result: Date = ProjectionService.convertToDate("20/01/2025");

		expect(result).is.a("Date");
	});
});
