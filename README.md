# Nodejs Sample

## Project

This project is designed as REST api for easier consumption and usuage.

You can use either POSTman or REST Client (vscode extension) to run the requests.

To get the projections we can perform a POST request to this url : **http://localhost:5001/api/v1/projections**
with following data:

```json
{
	"num_of_customers": 10,
	"date": "12/02/2025",
	"monthly_growth_rate": 0.2,
	"months": 5
}
```

Here, we are calculating using months instead of years to have more granular control on the timeline adjustments.

## Run commands

```bash
npm start
```

### Run Tests

```bash
npm run test
```

For visual results for automated testing

```bash
npm run test:coverage
```
