import { Meal } from '@/utils/interfaces';
import MealItem from './MealItem';

interface MealsGridProps {
	meals: Meal[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
	return (
		<ul className="mx-auto my-[2rem] grid w-[90%] max-w-[90rem] grid-cols-3 gap-[2rem] p-0">
			{meals.map((meal) => (
				<li key={meal.id} className="meal-item">
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
