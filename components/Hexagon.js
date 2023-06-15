/**
 * This is supposed to hold the main page video. It should have the same animation as the black
 * panther smart screen where the hexagons flip and the content comes on. It shouldn't let the 
 * video appear until the hex compelety flips over
 */

import React from 'react'
import styles from './Hexagon.module.css'
import utilStyles from '../styles/utils.module.css'

const Hexagon = () => {

    const listOfHex = () => {
        const items = [];
        let tops = 0;
        let delay = 0;
        for (let row = 0; row < 9; row++) {
            tops = (69 * row) - 65;
            let rights = 0;
            for (let i = 0; i < 13; i++) {
                if (row % 2 == 0) {
                    rights = (84 * i) - 20;
                } else {
                    rights = (84 * i) - 60;
                }
                delay = (Math.random()/3)+(row/3)+0.75;

                items.push(
                    <>
                        <img className={styles.hex}
                            style={{ top: `${tops}px`, left: `${rights}px`,animationDelay:`${delay}s` }}
                            src="/images/ex.png" alt="hexagon" />
                        <img className={styles.fill}
                            style={{ top: `${tops}px`, left: `${rights}px`,animationDelay:`${delay}s` }}
                            src="/images/hexFill.png" alt="hexagon" />
                    </>
                )
            }
        }

        return items;
    }
    return (
        <div className={styles.parent}>
            <div>
                {listOfHex()}
            </div>

            <video autoPlay muted loop className={utilStyles.video + ' ' + styles.video}>
                <source src='/videos/Main_1.mp4' />
            </video>
        </div>

    )
}

export default Hexagon