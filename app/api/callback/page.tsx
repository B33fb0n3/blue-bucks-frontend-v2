type CallBackPageProps = {
	searchParams: {
		[key: string]: string | undefined;
	};
};

export default function CallBackPage({ searchParams }: CallBackPageProps) {
	return (
		<>
			<h1>CallBackPage</h1>
			<p>{JSON.stringify(searchParams, null, 2)}</p>
		</>
	);
}
