
import Image from 'next/image'


export async function getStaticProps() {
    return {
        props: {
           pageId:"projects"
        }
    }
}

type ProjectItemProps = {
    name: string
    url: string
    imageSrc: string
    codeAccess: string
    codeUrl: string
}

function ProjectItem(props: ProjectItemProps) {
    let{name, url, codeAccess, codeUrl, imageSrc: image} = props;
    return <li className="col-span-1">
        <a href={url} target="_blank">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font=bold text-xl mb-2">{name}</div>
                </div>
                <Image src="/images/[image file name]" alt="[image description]" width={300} height={300} />
            </div>
            
        </a><div className="px-6 py-4">
                <span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 mr-2"><a href={codeUrl} target="_blank">{codeAccess}</a></span>
            </div>
        </li>
}
export default function Projects() {
    return <div className="mt-16 px-8">
        <header>
            <h1 className="text-4xl font-bold text-zinc-900">Cynthia Weaver's Project Gallery</h1>
            <p className="text-l italic text-zinc-800">Exploring. Learning. Creating. Turning Ideas into Reality.</p>
            <p className="text-base mt-6 text-xl text-zinc-800">I invite you to discover my projects.</p>
        </header>
        <div className="mt-16">
            <h2 className="text-2xl">Apps</h2>
            <ul className="grid grid-cols-3 gap-x-12 gap-y-16 mt-8">
                <ProjectItem name="Restaurant Reservation System" url="https://restaurant-reservations-system.onrender.com/" codeUrl="https://github.com/CynthiaWeaver-Jeannine/reservation-system" codeAccess="Restaurant Reservation System Code" imageSrc="/images/restaurant-reservation-system.png" />
                <ProjectItem name="Flashcard-O-Matic" url="https://flashcards-frontend-ole1.onrender.com/" codeUrl="https://github.com/CynthiaWeaver-Jeannine/flashcard-o-matic" codeAccess="Flashcard-O-Matic Code" imageSrc="/images/flashcard-o-matic.png" />
            </ul>
        </div>
        <div className="mt-16"><h2 className="text-2xl">Web Pages</h2></div>
        <div className="mt-16"><h2 className="text-2xl">Continuous Learning</h2></div>
        </div>

}