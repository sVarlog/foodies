import MealItem from './MealItem';

interface MealsGridProps {
	meals: {
		id: string;
		title: string;
		slug: string;
		image: string;
		summary: string;
		creator: string;
	}[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
	return (
		<ul className="mx-auto my-[2rem] grid w-[90%] max-w-[90rem] grid-cols-[repeat(auto-fill),minmax(20rem,1fr)] gap-[5rem] p-0">
			{meals.map((meal) => (
				<li key={meal.id} className="meal-item">
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
