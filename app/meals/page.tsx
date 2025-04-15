import { getMeals } from '@/api/meals';
import MealsGrid from '@/components/meals/MealsGrid';
import Link from 'next/link';
import { Suspense } from 'react';

const Meals = async () => {
	const meals = await getMeals();

	return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
	return (
		<>
			<header className="mx-auto mt-[3rem] mb-[5rem] w-[90%] max-w-[75rem] gap-[3rem] text-[1.5rem] text-[#ddd6cb]">
				<h1>
					Delicious meals, created <span className="text-yellow-500">by you</span>
				</h1>

				<p className="m-0">Choose your favorite recipe and cook it yourself. It is easy and fun!</p>

				<p className="m-0">
					<Link
						href="/meals/share"
						className="mt-[1rem] inline-block rounded-[6px] bg-yellow-500 px-[1rem] py-[0.5rem] font-bold text-white"
					>
						Share Your Favorite Recipe
					</Link>
				</p>
			</header>

			<main className="">
				<Suspense
					fallback={<div className="flex h-screen flex-col items-center justify-center">Loading...</div>}
				>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
