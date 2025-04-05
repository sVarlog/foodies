import "./globals.css";

export const metadata = {
    title: "NextJS Course App",
    description: "Your first NextJS app!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
