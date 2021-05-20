import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'

import { getMenuTypesAndMenuItems } from '../../lib/api'
import Container from '../../components/container'

export async function getStaticProps() {
    
    const menuTypes = await getMenuTypesAndMenuItems() 

    return {
        props: { menuTypes }
    }
}

export default function Menu({ menuTypes }) {
    return (
        <Layout>
            <Container>
                <h1>Menu</h1>
                <p>This is the menu intro</p>
                {menuTypes.edges.map((edge, index)=>{
                    const { name, items } = edge.node;
                    return <Section title={name} key={index}>
                        <Row justifyContentCenter>
                            {items.edges.map((edge, index) => {
                                const { node } = edge;                    
                                return <Col sm={6} md={4} lg={3}key={index}>
                                    <Card node={node} dir="menu"/>
                                </Col>
                            })}
                        </Row>                    
                    </Section>
                })}
            </Container>
        </Layout>
    )
}

