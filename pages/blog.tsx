/** @format */

export async function getStaticProps() {
	return {
		props: {
			pageId: "blog",
			metadata: {
				title: "Cynthia J Weaver",
				description:
					"Discover the work of Cynthia Weaver on her personal portfolio site.",
				openGraph: {
					image: "https://example.com/image.jpg",
					url: "https://example.com",
				},
			},
		},
	};
}

export default function Essays() {
	return <>Blog</>;
}
