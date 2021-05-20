import Head from "next/head";
import Layout from "../components/layout";

export default function Portfolio() {
    return (
        <Layout>
            <Head>
                <title>Portfolio | Steve McLaughlin</title>
                <meta name="description" content="a portfolio of web design"/>
            </Head>
            <h1>Portfolio</h1>
            <p>Portfolio content goes here</p>
        </Layout>
    )
}