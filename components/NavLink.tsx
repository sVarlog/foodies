'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
	const path = usePathname();

	return (
		<Link href={href} className={clsx('duration-200 hover:text-yellow-400', path === href && 'text-yellow-500')}>
			{children}
		</Link>
	);
};

export default NavLink;
