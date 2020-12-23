const BASE_URL = 'localhost:8080';

const getCalendarTasks = (month, year) => {
	return fetch(`${BASE_URL}/calendar/${year}/${month}`).then(res => res.json());
};

const getCalendarTasksMock = (month, year) => {
	const calendarMocks = [
		{
			month: 12,
			year: 2020,
			tasks: [
				{
					id: 1,
					desc: "Survive",
					deadline: {
						day: 1,
						month: 1,
						year: 2021
					}
				},
				{
					id: 6,
					desc: "Finish React Native App",
					deadline: {
						day: 1,
						month: 1,
						year: 2040
					}
				},
			]
		},
		{
			month: 1,
			year: 2021,
			tasks: [
				{
					id: 5,
					desc: "Survive",
					deadline: {
						day: 9,
						month: 1,
						year: 2021
					}
				}
			]
		}
	];
	const suitable = calendarMocks.filter((element) => element.month === month && element.year === year);
	if (suitable.length < 1) {
		return Promise.reject();
	}
	return Promise.resolve(suitable[0]);
};


export default {
	getCalendarTasks: getCalendarTasksMock
}
