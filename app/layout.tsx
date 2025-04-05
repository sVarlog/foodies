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

				{children}
			</body>
		</html>
	);
};

export default RootLayout;
