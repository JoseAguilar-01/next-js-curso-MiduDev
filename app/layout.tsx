import Link from 'next/link';

const links = [
	{
		route: '/',
		label: 'Home',
	},
	{
		route: '/about',
		label: 'About us',
	},
	{
		route: '/contacts',
		label: 'Contacts',
	},
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>My First Page</title>
			</head>
			<body>
				<header>
					<nav>
						<ul>
							{links.map(({ route, label }) => (
								<li key={route}>
									<Link href={route}>{label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
