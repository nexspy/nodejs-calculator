import express from "express";
import ProjectionRoutes from "./routes/ProjectionRoutes";

const app = express();

const API_VERSION = process.env.API_VERSION || "/api/v1";

app.use(express.json());

// default route
app.get(`${API_VERSION}`, (req: express.Request, res: express.Response) => {
	res.send("Uniflow API");
});

// use to check if the API is healthy
app.get(
	`${API_VERSION}/health`,
	(req: express.Request, res: express.Response) => {
		res.send("API is healthy");
	}
);

// projection routes
app.use(`${API_VERSION}/projections`, ProjectionRoutes);

export default app;
