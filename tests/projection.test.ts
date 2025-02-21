import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { Application } from "express"; // Import Express types
import app from "../src/app"; // Your Express app

chai.use(chaiHttp);

const API_VERSION = process.env.API_VERSION || "/api/v1";

describe("Projection Test", () => {
	it("should return string", async () => {
		try {
			const res = await chai
				.request(app as Application)
				.post(`${API_VERSION}/projections`);
			// Assertions
			expect(res).to.have.status(200);
			expect(res.text).to.equal("Calculating projection");
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
