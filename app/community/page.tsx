import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

const CommunityPage = () => {
	return (
		<>
			<header className="my-auto mr-[3rem] ml-[3rem] w-[90%] max-w-[75rem] gap-[3rem] text-center text-[1.5rem] text-[#ddd6cb]">
				<h1 className="mb-[1.5rem]">
					One shared passion: <span className="text-yellow-500">Food</span>
				</h1>

				<p>Join our community and share your favorite recipes!</p>
			</header>

			<main className="mx-auto my-0 w-[90%] max-w-[40rem] text-center">
				<h2 className="mb-[3rem] text-[2rem] text-[#ddd6cb]">Community Perks</h2>

				<ul className="mx-0 my-[3rem] list-none p-0">
					<li className="flex flex-col items-center gap-[2rem]">
						<Image className="h-[8rem] w-[8rem] object-contain" src={mealIcon} alt="A delicious meal" />

						<p className="m-0 text-[1.5rem] font-bold text-[#ddd6cb]">Share & discover recipes</p>
					</li>

					<li className="flex flex-col items-center gap-[2rem]">
						<Image
							className="h-[8rem] w-[8rem] object-contain"
							src={communityIcon}
							alt="A crowd of people, cooking"
						/>

						<p className="m-0 text-[1.5rem] font-bold text-[#ddd6cb]">
							Find new friends & like-minded people
						</p>
					</li>

					<li className="flex flex-col items-center gap-[2rem]">
						<Image
							className="h-[8rem] w-[8rem] object-contain"
							src={eventsIcon}
							alt="A crowd of people at a cooking event"
						/>

						<p className="m-0 text-[1.5rem] font-bold text-[#ddd6cb]">Participate in exclusive events</p>
					</li>
				</ul>
			</main>
		</>
	);
};

export default CommunityPage;
