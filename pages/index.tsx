/** @format */

import Image, { StaticImageData } from "next/image";

import imageFlashcardApp from "../public/images/flashcard-app.png";
import imageRestaurantReservations from "../public/images/restaurant-reservations-app.png";

export async function getStaticProps() {
	return {
		props: {
			pageId: "projects",
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

type ProjectItemProps = {
	name: string;
	url: string;
	imageSrc: StaticImageData;
	codeAccess: string;
	codeUrl: string;
	subtitle: string;
};

function ProjectItem(props: ProjectItemProps) {
	let { name, url, codeAccess, codeUrl, imageSrc: image, subtitle } = props;
	return (
		<li>
			<a
				href={url}
				target="_blank">
				<div>
					<p className="font=bold text-4xl mb-2">{name}</p>
					<p className="text-xl mb-4">{subtitle}</p>
				</div>
				<div className="max-w-XL rounded overflow-hidden shadow-lg">
					<Image
						className="w-full"
						src={image}
						alt={name}
					/>
					<div className="px-6 py-4"></div>
				</div>
			</a>
			<div className="px-6 py-4">
				<span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 mr-2 mb-16">
					<a
						href={codeUrl}
						target="_blank">
						{codeAccess}
					</a>
				</span>
			</div>
		</li>
	);
}
export default function Projects() {
	return (
		<div className="mt-16 px-8">
			<header className="border-b py-8">
				<h1 className="text-5xl font-bold text-zinc-900">
					Cynthia Weaver's Project Gallery
				</h1>
				<p className="text-lg italic text-zinc-800 mt-2 mb-4">
					Exploring. Learning. Creating. Turning Ideas into Reality.
				</p>
			</header>
			<div className="mt-8">
				<ul className="mt-8">
					<ProjectItem
						name={"Restaurant Reservations System"}
						url={"https://restaurant-reservations-system.onrender.com/"}
						subtitle={
							"Web Application. Skills: React, Nodejs, Express, Knexjs, PostgreSQL"
						}
						codeUrl={
							"https://github.com/CynthiaWeaver-Jeannine/reservation-system"
						}
						codeAccess={"GitHub Link"}
						imageSrc={imageRestaurantReservations}
					/>
					<ProjectItem
						name="Flashcard-O-Matic"
						url={"https://flashcards-frontend-ole1.onrender.com/"}
						subtitle={
							"Web Application. Skills: React, JavaScript, HTML, CSS, Knex.js"
						}
						codeUrl={
							"https://github.com/CynthiaWeaver-Jeannine/flashcard-o-matic"
						}
						codeAccess={"GitHub Link"}
						imageSrc={imageFlashcardApp}
					/>
				</ul>
			</div>
		</div>
	);
}
