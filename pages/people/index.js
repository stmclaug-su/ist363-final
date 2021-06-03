import Layout from "../../components/layout";

import Card from "../../components/card";
import Row from "../../components/row";
import Col from "../../components/col";

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
                    <Row justifyContentCenter>
                        {people.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col sm={6} md={4} lg={3}>
                                    <Card key={index} node={node} dir="people" />
                                </Col>
                        })}
                    </Row>
                </section>
            </Container>
        </Layout>
    )
}

//TODO: list of people, single person template 