const BASE_URL = 'localhost:8080';

const getCalendarTasks = (month, year) => {
	return fetch(`${BASE_URL}/calendar/${year}/${month}`).then(res => res.json());
};

const getAllTasks = () => {
	return fetch(`${BASE_URL}/tasks`).then(res => res.json());
};

const getAllTasksMock = () => {
	return Promise.resolve([
		{
			id: 1,
			desc: "Survive",
			deadline: {
				day: 31,
				month: 12,
				year: 2020
			}
		},
		{
			id: 6,
			desc: "Finish React Native App",
			deadline: {
				day: 23,
				month: 12,
				year: 2020
			}
		},
		{
			id: 5,
			desc: "Survive",
			deadline: {
				day: 9,
				month: 1,
				year: 2021
			}
		}
	]);
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
						day: 31,
						month: 12,
						year: 2020
					}
				},
				{
					id: 6,
					desc: "Finish React Native App",
					deadline: {
						day: 23,
						month: 12,
						year: 2020
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
	getCalendarTasks: getCalendarTasksMock,
	getAllTasks: getAllTasksMock
}
