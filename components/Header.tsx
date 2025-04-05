import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '@/assets/logo.png';
import NavLink from './NavLink';

const Header = () => {
	return (
		<>
			<div className="absolute top-0 left-0 -z-[1] h-[320px] w-full">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#59453c', stopOpacity: '1' }} />
							<stop offset="100%" style={{ stopColor: '#8f3a09', stopOpacity: '1' }} />
						</linearGradient>
					</defs>

					<path
						fill="url(#gradient)"
						d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</div>

			<header className="fixed top-0 flex w-full items-center justify-center px-[10px] py-[10px]">
				<div className="container flex w-full justify-between">
					<Link href="/" className="flex items-center gap-[10px] text-2xl font-bold">
						<Image src={LogoImg} alt="Logo" width={60} height={60} className="mr-2 inline-block" />

						<span className="uppercase">NextLevel Food</span>
					</Link>

					<nav className="flex items-center">
						<ul className="flex gap-[20px] text-[20px] font-bold">
							<li>
								<NavLink href="/meals">Explore Meals</NavLink>
							</li>

							<li>
								<NavLink href="/community">Community</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
