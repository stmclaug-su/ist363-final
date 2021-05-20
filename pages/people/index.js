import Layout from "../../components/layout";

import Card from "../../components/card";

import { getAllPeople } from "../../lib/api";
import Container from "../../components/container";

// getStaticProps
export async function getStaticProps() {
    const people = await getAllPeople()
    return {
        props: { people }
    }
}

export default function People({ people }) {
    return (
        <Layout>
            <Container>
                <h1>People</h1>
                <section>
                    {people.edges.map((edge, index) => {
                        const { node } = edge;
                        return <Card key={index} node={node} dir="people" />
                    })}
                </section>
            </Container>
        </Layout>
    )
}

//TODO: list of people, single person template 