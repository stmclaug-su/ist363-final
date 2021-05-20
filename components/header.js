import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

//next.js components
import Image from 'next/image'
import Link from 'next/link'

//custom components
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'
import SearchOverlay from './searchoverlay'
//custom styles
import styles from './header.module.scss'
import Container from './container'
import Row from './row'

export default function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false); //react hook
    const [isSearchVisible, setSearchVisible] = useState(false);

    const variants = {
        open: {
            x: 0
        },
        closed: {
            x: "100%"
        },
        exit: {
            x: "100%"
        },
        transition: {
            type: "spring",
            bounce: 0,
        }
    }

    return (
        <header className={styles.header}>
            <Container>
                <Row justifyContentSpaceBetween>
                <ButtonUI icon="search" clickHandler={() => {
                        setSearchVisible(true)
                    }} />
                    <AnimatePresence>
                    {
                        isSearchVisible && //shorthand, no 'else'

                            <motion.div 
                                className={styles.search_container}
                                initial="closed"
                                animate={isSearchVisible ? 'open' : 'closed'}
                                variants={variants}
                                exit="exit"
                                transition="transition"
                            >
                                <SearchOverlay
                                    closeClickHandler={() => {
                                        setSearchVisible(false)
                                    }}
                                    isSearchVisible
                                />
                            </motion.div>
                    }
                    </AnimatePresence>
                    <Link href ="/">
                        <a>
                            <Image 
                                src="/images/starbucks-logo.svg"
                                width={100}
                                height={100}
                                alt="Starbucks logo"
                            />
                        </a>
                    </Link>
                    <ButtonUI icon="menu" clickHandler={() => {
                        setMenuVisible(true)
                    }} />
                    <AnimatePresence>
                    {
                        isMenuVisible && //shorthand, no 'else'

                            <motion.div 
                                className={styles.nav_container}
                                initial="closed"
                                animate={isMenuVisible ? 'open' : 'closed'}
                                variants={variants}
                                exit="exit"
                                transition="transition"
                            >
                                <NavOverlay
                                    closeClickHandler={() => {
                                        setMenuVisible(false)
                                    }}
                                    isMenuVisible
                                />
                            </motion.div>
                    }
                    </AnimatePresence>
            </Row>
            </Container>
        </header>
    )
}

