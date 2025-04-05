import Header from '@/components/Header';
import './globals.css';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<Header />

				<div className="container mx-auto mt-[250px]">{children}</div>
			</body>
		</html>
	);
};

export default RootLayout;
