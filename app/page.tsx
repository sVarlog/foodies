import ImageSlideshow from '@/components/images/Slideshow';
import Link from 'next/link';

const Home = () => {
	return (
		<>
			<header className="flex w-full items-center gap-[20px]">
				<div className="w-[50%]">
					<ImageSlideshow />
				</div>

				<div className="w-[50%]">
					<div className="flex flex-col">
						<h1 className="text-yellow-500 uppercase">NextLevel Food for NextLevel Foodies</h1>
						<p className="py-[20px]">Taste & share food from all over the world.</p>
					</div>

					<div className="flex items-center gap-[20px]">
						<Link href="/community" className="text-yellow-500">
							Join the Community
						</Link>

						<Link
							href="/meals"
							className="rounded-[6px] bg-yellow-500 px-[20px] py-[10px] font-bold text-white"
						>
							Explore Meals
						</Link>
					</div>
				</div>
			</header>

			<main>
				<section className="mb-[40px] flex flex-col gap-[40px]">
					<h2 className="text-[40px] font-bold">How it works</h2>

					<p className="text-[14px]">
						NextLevel Food is a platform for foodies to share their favorite recipes with the world.
						It&apos;s a place to discover new dishes, and to connect with other food lovers.
					</p>

					<p className="text-[14px]">
						NextLevel Food is a place to discover new dishes, and to connect with otehr food lovers.
					</p>
				</section>

				<section className="mb-[40px] flex flex-col gap-[40px]">
					<h2 className="text-[40px] font-bold">Why NextLevel Food?</h2>

					<p className="text-[14px]">
						NextLevel Food is a platform for foodies to share their favorite recipes with the world.
						It&apos;s a place to discover new dishes, and to connect with other food lovers.
					</p>

					<p className="text-[14px]">
						NextLevel Food is a place to discover new dishes, and to connect with otehr food lovers.
					</p>
				</section>
			</main>
		</>
	);
};

export default Home;
