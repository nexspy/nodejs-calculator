import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { Application } from "express"; // Import Express types
import app from "../src/app"; // Your Express app

chai.use(chaiHttp);

describe("App Route Test", () => {
	it("should return API is healthy", async () => {
		try {
			const res = await chai
				.request(app as Application)
				.get("/api/health");
			// Assertions
			expect(res).to.have.status(200);
			expect(res.text).to.equal("API is healthy");
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

	it("should return Uniflow API", async () => {
		try {
			const res = await chai.request(app as Application).get("/");
			// Assertions
			expect(res).to.have.status(200);
			expect(res.text).to.equal("Uniflow API");
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
