import Layout from "../../components/layout"
import Image from 'next/image'
import Link from 'next/link'

import { getAllMenuItemSlugs, getMenuItemBySlug } from '../../lib/api'
import Row from "../../components/row"
import Col from "../../components/col"
import Button from "../../components/button"


export async function getStaticPaths() {

    const allSlugs = await getAllMenuItemSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    }) 

    return {
        paths,
        fallback: false 
    }
}

export async function getStaticProps({ params }) {

    const menuItemData = await getMenuItemBySlug(params.id) 

    return {
        props: {
            menuItemData
        }
    }

}

export default function MenuItem({ menuItemData }) {

    const { title, featuredImage, content, nutritionalInformation } = menuItemData;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;
    const { width, height } = mediaDetails;
    const { nutritionalData } = nutritionalInformation;


    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/menu">
                        <a>Back to Menu</a>
                    </Link>
                </Col>
            </Row>
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Row justifyContentSpaceAround bt bb>
                {nutritionalData.map((datum, index)=>{
                    return <Col lg={4} md={4} sm={4} xs={4} key={index}>
                                <label>{datum.property}</label> <h2>{datum.value}</h2>
                        </Col>
                })}
            </Row>
            <Row justifyContentCenter>
                <Col>
                    <Button label="Order Now" path="/menu" type="primary" />
                </Col>
            </Row>            
        </Layout>
    )
} 
