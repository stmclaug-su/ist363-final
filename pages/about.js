import Head from "next/head";
import Layout from "../components/layout";
import { motion } from 'framer-motion'

export default function About() {
    const aboutVariants = {
        exit: {
          x: 100,
          opacity: 0,
          transition: {
            duration: 0.5,
          }
        },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          }
        }
      };
    return (
        <motion.div variants={aboutVariants} initial="exit" animate="enter" exit="exit">
            <Layout>
                <Head>
                    <title>About | Steve McLaughlin</title>
                    <meta name="description" content="About page"/>
                </Head>
                <h1>About</h1>
                <p>About content goes here</p>
            </Layout>
        </motion.div>
    )
}

