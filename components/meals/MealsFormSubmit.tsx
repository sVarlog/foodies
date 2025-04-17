'use client';

import { useFormStatus } from 'react-dom';

const MealsFormSubmit = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className="cursor-pointer rounded-[6px] border-0 bg-yellow-500 px-[2rem] py-[1rem] font-bold text-white shadow-md"
			disabled={pending}
		>
			{pending ? 'Saving...' : 'Save Meal'}
		</button>
	);
};

export default MealsFormSubmit;
