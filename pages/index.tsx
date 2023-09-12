import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me"
    }
    }
  }
export default function Home() {
  return (
    <>About Me</>
  )
}


