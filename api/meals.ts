import { Meal } from '@/utils/interfaces';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';

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

const saveMeal = async (meal: Meal): Promise<void> => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			meal.slug = slugify(meal.title, {
				lower: true,
			});
			meal.instructions = xss(meal.instructions);

			const extension = meal.image.name.split('.').pop();

			const fileName = `${meal.slug}.${new Date().getTime()}.${extension}`;

			const stream = fs.createWriteStream(`public/images/${fileName}`);
			const bufferedImage = await meal.image.arrayBuffer();

			stream.write(Buffer.from(bufferedImage), (error) => {
				if (error) {
					// throw new Error('Saving image failed!');
					reject(new Error('Saving image failed!'));
				}
			});

			const image = `/images/${fileName}`;

			db.prepare(
				`
				INSERT INTO meals
					(title, summary, instructions, creator, creator_email, image, slug)
				VALUES (
					@title,	
					@summary,
					@instructions,
					@creator,
					@creator_email,
					@image,
					@slug
				)
			`
			).run({ ...meal, image });

			resolve();
		}, 200);
	});
};

export { getMeals, getMealBySlug, saveMeal };
