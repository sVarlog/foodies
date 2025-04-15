import { Meal } from '@/utils/interfaces';
import sql from 'better-sqlite3';

const db = sql('meals.db');

const getMeals = async (): Promise<Meal[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const meals = db.prepare('SELECT * FROM meals').all() as Meal[];

			resolve(meals);
		}, 200);
	});
};

const getMealBySlug = async (slug: string): Promise<Meal | undefined> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;

			resolve(meal);
		}, 200);
	});
};

export { getMeals, getMealBySlug };
