import Link from 'next/link'

import classNames from 'classnames/bind'

import styles from "./button.module.scss"

let cx = classNames.bind(styles);

//alternate export syntax:
const Button = ({ label, path, type }) => {
    let buttonClasses = cx({
        btn: true,
        primary: type === 'primary',
        secondary: type === 'secondary',
    }) //anything true is added to class names

    //try to keep logic out of returns
    return (
        <Link href={path}>
            <a className={buttonClasses}>{label}</a>
        </Link>
    )
}
export default Button;
