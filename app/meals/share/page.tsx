import { shareMeal } from '@/api/actions';
import FormElement from '@/components/meals/FormElement';
import ImagePicker from '@/components/meals/ImagePicker';

const MealsSharePage = () => {
	return (
		<>
			<header className="mx-auto mt-[3rem] mb-[5rem] w-[90%] max-w-[75rem] gap-[3rem] text-[1.5rem] text-[#ddd6cb]">
				<h1>
					Share your <span className="font-bold text-yellow-500">favorite meal</span>
				</h1>

				<p>Or any other meal you feel need sharing!</p>
			</header>

			<main className="mx-auto my-[3rem] w-[90%] max-w-[75rem]">
				<form className="max-w-[50rem]" action={shareMeal}>
					<div className="flex flex-col gap-[1rem]">
						<FormElement name="name" label="Your name" type="text" required={true} />

						<FormElement name="email" label="Your email" type="email" required={true} />

						<FormElement name="title" label="Title" type="text" required={true} />

						<FormElement name="summary" label="Short summary" type="text" required={true} />

						<FormElement name="instructions" label="Instructions" type="textarea" required={true} />

						<ImagePicker name="image" label="Image" />

						<p className="text-right">
							<button
								type="submit"
								className="cursor-pointer rounded-[6px] border-0 bg-yellow-500 px-[2rem] py-[1rem] font-bold text-white shadow-md"
							>
								Share Meal
							</button>
						</p>
					</div>
				</form>
			</main>
		</>
	);
};

export default MealsSharePage;
