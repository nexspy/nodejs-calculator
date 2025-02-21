import express from "express";

const app = express();

app.use(express.json());

// default route
app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Uniflow API");
});

// use to check if the API is healthy
app.get("/api/health", (req: express.Request, res: express.Response) => {
	res.send("API is healthy");
});

export default app;
