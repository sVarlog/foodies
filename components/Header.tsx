import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '@/assets/logo.png';

const Header = () => {
	return (
		<header className="fixed top-0 flex w-full items-center justify-center px-[10px] py-[10px]">
			<div className="container flex w-full justify-between">
				<Link href="/" className="flex items-center gap-[10px] text-2xl font-bold">
					<Image src={LogoImg.src} alt="Logo" width={50} height={50} className="mr-2 inline-block" />

					<span className="uppercase">NextLevel Food</span>
				</Link>

				<nav className="flex items-center">
					<ul className="flex gap-[20px]">
						<li>
							<Link href="/meals" className="text-lg hover:text-gray-300">
								Meals
							</Link>
						</li>

						<li>
							<Link href="/community" className="text-lg hover:text-gray-300">
								Community
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
