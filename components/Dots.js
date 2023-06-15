import React from 'react'
import styles from './Dots.module.css'

const Dots = () => {
    return (
        <div>
            <div className={styles.bouncingLoader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Dots