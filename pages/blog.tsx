export async function getStaticProps() {
    return {
        props: {
           pageId:"blog"
        }
    }
}

export default function Essays() {
    return <>Blog</>
}