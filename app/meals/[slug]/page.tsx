import { getMealBySlug } from '@/api/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface MealPageProps {
	params: {
		slug: string;
	};
}

const MealPage = async ({ params }: MealPageProps) => {
	const meal = await getMealBySlug(params.slug);

	if (!meal) {
		notFound();
	}

	const getTrimedInstructions = (instructions: string) => {
		const trimmedInstructions = instructions.split('\n');

		const filteredInstructions = trimmedInstructions
			.map((instruction) => instruction.trim())
			.filter((instruction) => instruction !== '');

		const formattedInstructions = filteredInstructions.join('\n');

		return (
			<>
				{formattedInstructions.split('\n').map((instruction, index) => (
					<span key={index} className="my-[2rem] block text-2xl">
						{instruction}
					</span>
				))}
			</>
		);
	};

	return (
		<>
			<header className="m-auto flex max-w-[80rem] gap-[3rem] px-[1rem] py-[2rem]">
				<div className="relative h-[20rem] w-[30rem]">
					<Image className="rounded-[8px] object-cover shadow-md" src={meal.image} fill alt={meal.title} />
				</div>

				<div className="max-w-[40rem] px-[1rem] pt-[0.5rem] text-[#ddd6cb]">
					<h1 className="m-0 text-5xl font-bold">{meal.title}</h1>

					<p className="py-[2rem] text-2xl text-[#cfa69b]">
						by{' '}
						<a href={`mailto:${meal.creator_email}`} className="font-bold text-yellow-500">
							{meal.creator}
						</a>
					</p>

					<p className="text-2xl">{meal.summary}</p>
				</div>
			</header>

			<main>
				<p className="mx-auto my-[2rem] rounded-[8px] bg-[#6e6464] p-[2rem] text-start text-2xl text-[#13120f] shadow-md">
					{getTrimedInstructions(meal.instructions)}
				</p>
			</main>
		</>
	);
};

export default MealPage;
