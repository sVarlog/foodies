import Image from 'next/image';
import Link from 'next/link';

interface MealItemProps {
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
}

const MealItem = ({ title, slug, image, summary, creator }: MealItemProps) => {
	return (
		<article className="flex flex-col justify-between rounded-[4px] bg-gradient-to-r from-[#2c1e19] to-[#25200f] p-[1rem] text-[#ddd6cb] shadow-sm transition-all duration-300 ease-in-out">
			<header>
				<Image src={image} alt={title} className="object-cover" fill />

				<div className="px-[1rem] pt-[0.5rem]">
					<h2 className="m-0 text-[1.5rem]">{title}</h2>
					<p className="text-[0.75rem] text-[#cfa69b]">by {creator}</p>
				</div>
			</header>

			<div className="flex h-full flex-col justify-between">
				<p className="px-[1rem] pt-[1rem]">{summary}</p>

				<div className="p-[1rem] text-right">
					<Link
						className="hover:yellow-500 inline-block rounded-[6px] bg-gradient-to-r from-[#f9572a] to-[#ff9b05] px-[1rem] py-[0.5rem] font-bold text-white"
						href={`/meals/${slug}`}
					>
						View Details
					</Link>
				</div>
			</div>
		</article>
	);
};

export default MealItem;
