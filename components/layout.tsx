
import React from 'react'
import Head from "next/head"


type NavItemProps = {
    title: string
    url: string
isSelected: boolean
}
function NavItem(props: NavItemProps) { 
    const { title, url, isSelected } = props;
    return (     
    <li>     
        <a className={`inline-block px-4 py-2 ${isSelected ? 'bg-zinc-900 text-white' : 'text-zinc-900 hover:bg-zinc-500 hover:text-white'} transition duration-300 ease-in-out`} href={url}>{title}</a>  
    </li>   
        ) 
    } 
    type NavbarProps = {
        pageId: string
    }
function Navbar(props: NavbarProps ) { 
    return ( 
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6"> 
        <nav> 
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">           
                <NavItem  title={"Projects"} url="/" isSelected={props.pageId == "projects"} />           
                <NavItem title={"About Me"} url={"/aboutMe"} isSelected={props.pageId == "about_me"} />           
                <NavItem title={"Blog"} url={"/blog"} isSelected={props.pageId == "blog"} />  
            </ul> 
        </nav> 
    </div> ) }
type FooterLinkProps = {
    text: string
    url: string
}

function FooterLink(props: FooterLinkProps) {
    let {url, text} = props;
    return <a className="transition hover:text-blue-500" href={url}>{text}</a>
}
    
function Footer() {
    return <footer className="pt-10 px-8 pb-16 border-t">
        <div className="flex justify-between gap-6">  
            <div className="flex gap-6 text-sm font-medium text-zinc-800">
                <p className="text-sm text-zinc-800"><a className="transition hover:text-blue-500" href="https://github.com/CynthiaWeaver-Jeannine/Cynthia_Weaver-Portfolio" target="_blank" rel="noopener noreferrer">GitHub Portfolio Project Link</a>
                </p>
            </div>             
            <div className="flex gap-6 text-sm font-medium text-zinc-800">
                <FooterLink text={"Projects"} url="/" />
                <FooterLink text={"About Me"} url="/aboutMe" />
                <FooterLink text={"Blog"} url="/blog" />
            </div>                
            <p className="text-sm text-zinc-800">© 2023, Built with <a className="transition hover:text-blue-500" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> and <a className="transition hover:text-blue-500" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a></p>
        </div>
    </footer>
}

export default function Layout({children}: any) {
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{children.props.metadata.title}</title>
            {/*Open Graph tags*/}
            <meta property="og:title" content={children.props.metadata.title} />
            <meta property="og:description" content={children.props.metadata.description} />
            <meta property="og:image" content={children.props.metadata.openGraph.image} /> 
            <meta property="og:url" content={children.props.metadata.openGraph.url} />
        </Head>
        <Navbar pageId={children.props.pageId} />
        <main>{children}</main>
        <Footer />
        </>
    )
}



