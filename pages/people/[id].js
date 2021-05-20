import Link from 'next/link';

import Card from '../../components/card';
import Layout from '../../components/layout';
import Row from '../../components/row';
import Col from '../../components/col';

import { getPeopleSlugs, getPersonBySlug } from '../../lib/api';

//getStaticPaths
export async function getStaticPaths() {
    const pplSlugs = await getPeopleSlugs()
    const paths = pplSlugs.edges.map(edge => {
        const { slug } = edge.node;
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

    const personData = await getPersonBySlug(params.id)

    return {
        props: {
            personData
        }
    }

}

// initialize the component
export default function Person({ personData }) {
    const { personInformation } = personData; 
    const { emailAddress, jobTitle } = personInformation;


    return (
        <Layout>
            <Card node={personData} dir="people" />
            <Row>
                <Col>
                    <p>{jobTitle}</p>
                    <Link href={`mailto:${emailAddress}`}><a>{emailAddress}</a></Link>
                </Col>
            </Row>
            <Link href="/people">Back to People</Link>
        </Layout>
    )
}

