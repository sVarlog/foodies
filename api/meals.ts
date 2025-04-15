import { Meal } from '@/utils/interfaces';
import sql from 'better-sqlite3';

const db = sql('meals.db');

const getMeals = async (): Promise<Meal[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(db.prepare('SELECT * FROM meals').all() as Meal[]);
		}, 200);
	});
};

export { getMeals };
