import classnames from 'classnames/bind'

import styles from './row.module.scss'

let cx = classnames.bind(styles)

export default function Row({children, justifyContentCenter, justifyContentSpaceBetween, justifyContentSpaceAround, bt, bb}) {

    const rowClasses = cx({
        row : true,
        ['justify-content-center'] : justifyContentCenter,
        ['justify-content-space-between'] : justifyContentSpaceBetween,
        ['justify-content-space-around'] : justifyContentSpaceAround,
        ['bt'] : bt,
        ['bb'] : bb
    })

    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}