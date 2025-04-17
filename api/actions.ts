'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

const isInvalidText = (text: string) => {
	return !text || !text.trim().length;
};

const shareMeal = async (formData: FormData) => {
	const meal = {
		id: crypto.randomUUID(), // Generate a unique ID
		slug: (formData.get('title') || '').toString().toLowerCase().replace(/\s+/g, '-'), // Generate a slug from the title
		title: (formData.get('title') || '').toString(),
		summary: (formData.get('summary') || '').toString(),
		instructions: (formData.get('instructions') || '').toString(),
		image: formData.get('image') as File,
		creator: (formData.get('name') || '').toString(),
		creator_email: (formData.get('email') || '').toString(),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.image ||
		meal.image.size === 0
	) {
		throw new Error('Invalid input');
	}

	await saveMeal(meal);
	redirect('/meals');
};

export { shareMeal };
