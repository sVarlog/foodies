'use client';

interface ErrorProps {
	error: Error;
}

const Error = ({}: ErrorProps) => {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<h1 className="text-2xl font-bold">An error occurred!</h1>

			<p className="mt-4 text-lg">Please try again later.</p>
		</div>
	);
};

export default Error;
