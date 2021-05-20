import Image from 'next/image'
import Link from 'next/link'

import Row from '../components/row'

import styles from './footer.module.scss'

export default function Footer () {
    return (  
        
        <footer className={styles.footer}>
            <Row justifyContentSpaceBetween>
            <div>
                <Link href="www.facebook.com/starbucks">
                <a>
                    <Image
                    src="/images/facebook.svg"
                    width={20}
                    height={20}
                    alt="facebook icon"
                    />
                </a>
                </Link>
                <Link href="www.twitter.com/starbucks">
                <a>
                    <Image
                    src="/images/twitter.svg"
                    width={20}
                    height={20}
                    alt="twitter icon"
                    />
                </a>
                </Link>
            </div>
            <div>Copyright etc goes here </div>
            <div>Privacy</div>            
            </Row>
        </footer>   
    )
}