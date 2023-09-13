/** @format */

export async function getStaticProps() {
	return {
		props: {
			pageId: "about_me",

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
export default function Home() {
	return <div className="mt-16 px-8">
    <header>
      <h1 className="font-bold text-4XL text zinc-800">Hello! I&apos;m Cynthia</h1>
      </header></div>;
}
