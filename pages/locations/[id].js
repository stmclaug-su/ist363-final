import Link from 'next/link'


import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'
import Heading from '../../components/heading'

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

    const { streetAddress, city, state, zipCode, phoneNumber, } =locationData.locationInformation;  
    const { title, relatedPeople, menuTypes } = locationData;
    
    

    return (
        <Layout>
            <Row>
                <Col>
                    <Card node={locationData} dir="locations" />
                    <p>{streetAddress}</p>
                    <p>{city}, {state} {zipCode}</p>
                    <p>{phoneNumber}</p>
                    <Section title="Available Menus:">
                                                    
                        <Row justifyContentCenter>                                        
                                                                  
                            {menuTypes.nodes.map((node, index) => {
                                return <Section title={node.name}>
                                    <Row justifyContentCenter>
                                    {node.items.edges.map((edge, index) => {
                                        return <Col sm={6} md={4} lg={3}>
                                            <Card node={edge.node} dir="menu" key={index} /> </Col>                                        
                                    })}
                                    </Row>
                                    </Section>
                                                                   
                            })}
                            
                        </Row>
                            
                    </Section>
                    <Section title={`${title}Team:`}>
                        <Row justifyContentCenter>
                        {relatedPeople.locationsPeople.map((person, index) => {
                            const { personInformation } = person;
                            const { emailAddress, jobTitle } = personInformation;                            
                            
                            return <Col md={3}> 
                                    <Card node={person} dir="people"/> 
                                    <p>{emailAddress}</p>
                                    <Heading type="h4">{jobTitle}</Heading>                         
                                </Col>
                        })}
                        </Row>
                    </Section>
                    <Link href="/locations">Back to Locations</Link>
                </Col>
            </Row>
        </Layout>
    )
}

/*TODO: 
responsive grid (what did i mean by this)
map!
menu items (grid)
 -get menu types for location
    -get menu items for menu type
      -build card for menu item
*/