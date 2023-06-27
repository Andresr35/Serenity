/**
 * This is supposed to hold the main page video. It should have the same animation as the black
 * panther smart screen where the hexagons flip and the content comes on. It shouldn't let the 
 * video appear until the hex compelety flips over
 */

import React from 'react'
import styles from './Hexagon.module.css'
import utilStyles from '../styles/utils.module.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import Player from '@vimeo/player'
import { useState } from 'react'

const Hexagon = () => {
    const [animateButton,setAnimateButton] = useState(false);
    const [firstClick,setFirstClick]=useState(false)
    const videoRef = useRef(null);
    useEffect(() => {
        if (!videoRef.current) {
            return;
        }
        const player = new Player(videoRef.current)
        document.addEventListener('click', (event) => {
            player.play();
            
        })
    })
    let buttonAnimation;
    buttonAnimation = !animateButton?styles.muteButtonOn:' ';
    const muteButton =()=>{
        console.log('muted');
        if (!videoRef.current) {
            return;
        }
        const player = new Player(videoRef.current)
        if(animateButton){
            player.setMuted(false)
            setAnimateButton(false);
        }else{
            player.setMuted(true);
            setAnimateButton(true);
        }
        
        
        
    }
    const listOfHex = () => {
        const items = [];
        let tops = 0;
        let delay = 0;

        for (let i = 0; i < 60; i++) {
            delay = (i / 30) + .5 + (Math.random() / 3);
            items.push(
                <div className={styles.hexHolder} key={i}>
                    <img className={styles.hex}
                        style={{ animationDelay: `${delay}s` }}
                        src="/images/ex.png" alt="hexagon" />
                    <img className={styles.fill}
                        style={{ animationDelay: `${delay}s` }}
                        src="/images/hexFill.png" alt="hexagon" />
                </div>
            )
        }
        return items;

    }

    


    return (
        <div className={styles.parent}>
            <div className={styles.hexParent}>
                {listOfHex()}
            </div>
            <div className={styles.iframe}>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe ref={videoRef} className={styles.video} src="https://player.vimeo.com/video/838418567?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=0&amp;muted=0" frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Main_2">
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div onClick={()=>muteButton()}  className={styles.muteButton+ ' '+buttonAnimation} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>

            </div>

        </div>
    )
}
export default Hexagon