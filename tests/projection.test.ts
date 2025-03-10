import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import app from "../src/app";
import { ProjectionType } from "dtos/ProjectionInputDto";

chai.use(chaiHttp);

const API_VERSION = process.env.API_VERSION || "/api/v1";

describe("Projection Test", () => {
	it("should return 200", async () => {
		try {
			const projectionData: ProjectionType = {
				num_of_customers: 5,
				date: "12/01/2025",
				monthly_growth_rate: 2,
				months: 5,
			};

			const res = await chai
				.request(app as Application)
				.post(`${API_VERSION}/projections`)
				.send(projectionData);

			// Assertions
			expect(res).to.have.status(200);
			expect(res.body.projection[0]?.value).to.equal(15);
		} catch (err: unknown) {
			// Explicitly type `err` as an unknown first
			if (err instanceof Error) {
				// Handle typical Error object
				throw new Error(`Test failed: ${err.message}`);
			} else {
				// Handle unexpected error formats
				throw new Error("Test failed due to an unknown error");
			}
		}
	});
});
