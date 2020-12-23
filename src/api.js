const BASE_URL = 'localhost:8080';

const getCalendarTasks = (month, year) => {
	return fetch(`${BASE_URL}/calendar/${year}/${month}`).then(res => res.json());
};

const getAllTasks = () => {
	return fetch(`${BASE_URL}/tasks`).then(res => res.json());
};

const getAllTaskSources = () => {
	return fetch(`${BASE_URL}/sources`).then(res => res.json());
};

const getStats = () => {
	return fetch(`${BASE_URL}/stats`).then(res => res.json());
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

const getAllTaskSourcesMock = () => {
	return Promise.resolve([
		{
			id: 1,
			name: 'SFEDU Moodle',
			user: 'Lazy Student'
		},
		{
			id: 2,
			name: 'SFEDU ulearn',
			user: 'Lazy Student'
		}
	]);
};

const getStatsMock = () => {
	return Promise.resolve(
		[
			{
				source_id: 1,
				source_name: 'SFEDU Moodle',
				source_stats: [
					{
						name: 'Game design',
						score: 60,
						max_score: 100,
						percent: 60,
					},
					{
						name: 'Computer vision',
						score: 5,
						max_score: 100,
						percent: 5,
					},
				]
			},
			{
				source_id: 2,
				source_name: 'SFEDU ulearn',
				source_stats: [
					{
						name: 'Programming languages',
						score: 5000,
						max_score: 6000,
						percent: 500/6,
					},
				]
			},
		]
	);
};

export default {
	getCalendarTasks: getCalendarTasksMock,
	getAllTasks: getAllTasksMock,
	getAllTaskSources: getAllTaskSourcesMock,
	getStats: getStatsMock
}
