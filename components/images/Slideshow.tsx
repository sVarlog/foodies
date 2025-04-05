'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import clsx from 'clsx';

const images = [
	{ image: burgerImg, alt: 'A delicious, juicy burger' },
	{ image: curryImg, alt: 'A delicious, spicy curry' },
	{ image: dumplingsImg, alt: 'Steamed dumplings' },
	{ image: macncheeseImg, alt: 'Mac and cheese' },
	{ image: pizzaImg, alt: 'A delicious pizza' },
	{ image: schnitzelImg, alt: 'A delicious schnitzel' },
	{ image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

const ImageSlideshow = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative h-[400px] w-full overflow-hidden rounded-[8px] shadow-sm">
			{images.map((image, index) => (
				<Image
					key={index}
					src={image.image}
					className={clsx(
						'absolute top-0 left-0 h-full w-full -translate-x-[1rem] scale-110 -rotate-[5deg] object-cover opacity-0 transition-all duration-500 ease-in-out',
						index === currentImageIndex ? 'z-[1] translate-x-0 scale-100 rotate-0 opacity-100' : ''
					)}
					alt={image.alt}
				/>
			))}
		</div>
	);
};

export default ImageSlideshow;
