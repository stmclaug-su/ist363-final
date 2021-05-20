import Layout from "../../components/layout"
import Row from "../../components/row"
import Section from "../../components/section"
import Card from "../../components/card"

import { getAllLocations } from '../../lib/api'
import Container from "../../components/container"

// getStaticProps
export async function getStaticProps() {
    const locations = await getAllLocations()
    return {
        props: { locations }
    }
}

export default function Locations({ locations }) {
    return (
        <Layout>
            <Container>
                <h1>Locations</h1>
                <section>
                    {locations.edges.map((edge, index) => {
                        const { node } =edge;
                        return <Card key={index} node={node} dir="locations"/>
                    })}
                </section>
            </Container>
        </Layout>
    )
}

//TODO: Section? grid