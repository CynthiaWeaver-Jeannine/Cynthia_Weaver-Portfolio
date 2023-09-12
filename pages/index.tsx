
import Image from 'next/image'


export async function getStaticProps() {
    return {
        props: {
           pageId:"projects"
        }
    }
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
        </div>
        <div className="mt-16"><h2 className="text-2xl">Web Pages</h2></div>
        <div className="mt-16"><h2 className="text-2xl">Learning Projects</h2></div>
        </div>

}