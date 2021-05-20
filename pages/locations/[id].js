import Link from 'next/link'

import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'

import { getAllLocationSlugs, getLocationBySlug } from '../../lib/api'

//getStaticPaths
export async function getStaticPaths() {

    const locSlugs = await getAllLocationSlugs()
    const paths = locSlugs.edges.map(edge => {
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
//getStaticProps
export async function getStaticProps({ params }) {

    const locationData = await getLocationBySlug(params.id)

    return {
        props: {
            locationData
        }
    }

}


// initialize the component
export default function Location({ locationData }) {

    const { streetAddress, city, state, zipCode, phoneNumber, } =locationData.locationInformation  

    return (
        <Layout>
            <Row>
                <Col>
                    <Card node={locationData} dir="locations" />
                    <p>{streetAddress}</p>
                    <p>{city}, {state} {zipCode}</p>
                    <p>{phoneNumber}</p>
                    <Link href="/locations">Back to Locations</Link>
                </Col>
            </Row>
        </Layout>
    )
}

/*TODO: 
responsive grid
map?
menu items (grid)
people (grid)

*/