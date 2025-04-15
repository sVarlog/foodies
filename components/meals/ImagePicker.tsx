'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface ImagePickerProps {
	name: string;
	label: string;
}

const ImagePicker = ({ name }: ImagePickerProps) => {
	const [pickedImage, setPickedImage] = useState<string | null>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (!files || files.length === 0) {
			setPickedImage(null);

			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => {
			const imageUrl = fileReader.result as string;

			setPickedImage(imageUrl);
		};

		fileReader.readAsDataURL(files[0]);
	};

	const handleImagePick = () => {
		imageInputRef.current?.click();
	};

	return (
		<div className="picker">
			<label htmlFor={name}></label>

			<div className="mb-[1rem] flex items-start gap-[2rem]">
				<div className="relative flex h-[10rem] w-[10rem] items-center justify-center border-2 border-[#a4abb9] text-center text-[#a4abb9]">
					{pickedImage ? (
						<Image
							src={pickedImage}
							alt="Picked Image"
							width={100}
							height={100}
							className="h-[10rem] w-[10rem] rounded-[0.5rem] object-cover"
						/>
					) : (
						<p className="m-0 p-[1rem]">No image picked yet.</p>
					)}
				</div>

				<input
					ref={imageInputRef}
					className="hidden"
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					onChange={handleImageChange}
					required
				/>

				<button
					className="cursor-pointer rounded-[6px] border-0 bg-[#a4abb9] px-[1.5rem] py-[0.5rem] duration-200 hover:bg-[#b3b9c6]"
					type="button"
					onClick={handleImagePick}
				>
					Pick an Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
