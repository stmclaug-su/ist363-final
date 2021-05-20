import Link from 'next/link'
import Image from 'next/image'


import ButtonUI from './buttonui'
import styles from './navoverlay.module.scss'

export default function NavOverlay( { closeClickHandler } ) {

    return (  

        <div className={styles.nav_overlay}>
                <ButtonUI
                    icon="close"
                    clickHandler = {closeClickHandler}
                />
                <nav className={styles.nav_overlay_menu}>
                    <ul>
                        <li>
                            <Image 
                                src="/images/starbucks-logo.svg"
                                width={100}
                                height={100}
                                alt="Starbucks logo"
                            />
                        </li>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/menu">
                                <a>Menu</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations">
                                <a>Locations</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/people">
                                <a>People</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </div>
    
        
    )
    
}