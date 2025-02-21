export interface ProjectionResponse {
	value: number;
	date: string;
}

export interface ProjectionAdjustment {
	date: string;
	growth_rate: number;
}

export class ProjectionService {
	/**
	 * Calculate/Project the number of customers for a given date
	 *  - Calculation is done based on the start date given, and no. customers with growth rate
	 *  - Adjustments can be made to the growth rate for a specific date
	 *
	 * @param num_of_customers
	 * @param date in format of DD/YY/YYYY
	 * @param monthly_growth_rate
	 * @param months
	 * @param adjustments
	 * @returns
	 */
	public static calculateProjection = (
		num_of_customers: number,
		date: string,
		monthly_growth_rate: number,
		months: number = 0,
		adjustments?: ProjectionAdjustment[]
	): ProjectionResponse[] => {
		// calculate num of months starting from date to current date
		const currentDate: Date = new Date();
		const startDate = ProjectionService.convertToDate(date);
		const monthsTillToday: number =
			(currentDate.getFullYear() - startDate.getFullYear()) * 12 +
			(currentDate.getMonth() - startDate.getMonth());

		let totalMonths: number = monthsTillToday + months;

		// calculate projection
		let result: number = num_of_customers;
		let projectionPerMonth: ProjectionResponse[] = [];

		let monthIndex: number = 1;
		let nextDate = new Date(startDate);
		while (totalMonths > 0) {
			// label for current month
			// add one month to the startDate
			nextDate.setMonth(nextDate.getMonth() + monthIndex);
			const label = `${nextDate.getDate()}/${
				nextDate.getMonth() + 1
			}/${nextDate.getFullYear()}`;

			// find adjustment
			const adjustment: ProjectionAdjustment | undefined =
				adjustments?.find((a) => {
					if (a.date === label) {
						return true;
					}
				});

			if (adjustment) {
				result += result * adjustment.growth_rate;
			} else {
				// calculate the projection with the monthly growth rate
				result += result * monthly_growth_rate;
			}

			// only show 2 decimal places
			result = Math.round(result * 100) / 100;
			projectionPerMonth.push({
				value: Math.round(result),
				date: label,
			});
			totalMonths--;
		}

		return projectionPerMonth;
	};

	/**
	 * Convert a string date to a Date object
	 * @param dateString
	 * @returns
	 */
	public static convertToDate(dateString: string): Date {
		const [day, month, year] = dateString.split("/").map(Number);
		return new Date(year, month - 1, day);
	}
}
