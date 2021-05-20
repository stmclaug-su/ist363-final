import Heading from './heading'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ node, dir }) {
    const { title, slug, featuredImage } = node;
    
    const { sourceUrl, mediaDetails, altText } = featuredImage.node;

    const { width, height } = mediaDetails;

    return (
        <div className="card">
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <Heading type="h3">
                <Link href={`/${dir}/${slug}`}>
                    <a>
                        {title}
                    </a>
                </Link>
            </Heading>
        </div>
    )
}