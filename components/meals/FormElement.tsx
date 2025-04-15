interface FormElementProps {
	name: string;
	label: string;
	type: 'text' | 'email' | 'textarea';
	required: boolean;
}

const FormElement = ({ name, label, type, required }: FormElementProps) => {
	const inputClasses =
		'mt-[0.5rem] w-full rounded-[0.5rem] border-1 border-[#4b3c3c] bg-[#1f1d2b] p-[0.5rem] text-[#ddd6cb] focus:border-yellow-500 focus:outline-none';

	const inputElement =
		type === 'textarea' ? (
			<textarea className={inputClasses} id={name} name={name} rows={10} required={required}></textarea>
		) : (
			<input className={inputClasses} type={type} id={name} name={name} required={required} />
		);

	return (
		<p>
			<label htmlFor={name} className="mb-[0.5rem] block text-2xl font-bold text-[#b3aea5]">
				{label}
			</label>

			{inputElement}
		</p>
	);
};

export default FormElement;
