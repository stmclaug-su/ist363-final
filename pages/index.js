// next components
import Head from 'next/head'
import Image from 'next/image'

// my components
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import Container from '../components/container'
import Row from '../components/row'
import Col from '../components/col'
import Heading from '../components/heading'

// styles


export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        <Container> 
            <Row>
                <Col>                        
                    <Image 
                        src="/images/page-menu.jpg"
                        width={783}
                        height={450}
                    />
                    <Heading type="h2">Menu</Heading >
                    <Button 
                    label="View menu"
                    path="/menu"
                    type="primary"
                    />
                </Col>
                <Col>
                <Image 
                        src="/images/page-location.jpg"
                        width={783}
                        height={450}
                    />
                    <Heading type="h2">Locations</Heading >
                    <Button 
                    label="View locations"
                    path="/locations"
                    type="primary"
                    />
                </Col>
                <Col>
                    <Button 
                    label="View people"
                    path="/people"
                    type="primary"
                    />
                </Col>
                <Col>
                    <Button 
                    label="View portfolio"
                    path="/portfolio"
                    type="primary"
                    />
                </Col>
                <Col>
                    <Button 
                    label="About me" 
                    path="/about"
                    type="secondary"
                    />
                </Col>
            </Row>
        </Container>
        </Layout>
    )
}
