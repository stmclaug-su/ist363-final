import Link from 'next/link'
import Image from 'next/image'

import Button from './button'
import ButtonUI from './buttonui'
import styles from './searchoverlay.module.scss'

export default function SearchOverlay( { closeClickHandler } ) {

    return (  

        <div className={styles.search_overlay}>
                <ButtonUI
                    icon="close"
                    clickHandler = {closeClickHandler}
                />
                <nav className={styles.search_overlay_menu}>
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
                            <form>
                                <input type="search" name="" id="" />
                            </form>
                        </li>
                        <li>
                            <Button label="Search" path="" type="secondary"/>
                        </li>                        
                    </ul>
                </nav>
        </div>
    
        
    )
    
}