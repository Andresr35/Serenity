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
                delay = (Math.random() / 3) + (row / 3) + 0.75;

                items.push(
                    <>
                        <img className={styles.hex}
                            style={{ top: `${tops}px`, left: `${rights}px`, animationDelay: `${delay}s` }}
                            src="/images/ex.png" alt="hexagon" />
                        <img className={styles.fill}
                            style={{ top: `${tops}px`, left: `${rights}px`, animationDelay: `${delay}s` }}
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
            <div className={styles.iframe}>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe  className={styles.video} src="https://player.vimeo.com/video/838418567?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1" frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Main_2">
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </div>
    )
}
export default Hexagon