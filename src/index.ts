import app from "./app";
import { Server } from "http";

export const PORT: number = 5001;

export const server: Server = app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

export default server;
