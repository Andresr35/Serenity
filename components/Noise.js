import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame,extend, useLoader } from '@react-three/fiber';
import { Points, Preload, PointMaterial, Sphere } from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm';
import {TextureLoader} from 'three/src/loaders/TextureLoader';
import styles from './Noise.module.css'

const Noise = (props) => {
    const ref = useRef();
    const posArray = new Float32Array(500*3);
    const noiseMap = useLoader(TextureLoader,'/images/nnnoise.svg')
    for(let i =0;i<5000*3   ;i++){
        posArray[i] = (Math.random()-0.5)*10
    }
    let mousex = 0;
    let mousey=0;
    document.addEventListener('mousemove',(event)=>{
        mousex=event.clientX;
        mousey=event.clientY;

    })

    useFrame(({clock})=>{
        if(!ref.current){
            return;
        }
        const a =clock.getElapsedTime()
        if(mousey==0){
            ref.current.rotation.x=a/10;
        }else{
            ref.current.rotation.x = -(mousey/20)*(a/1000);
            ref.current.rotation.y = -(mousey/20)*(a/8000);
        }
        
        // ref.current.rotation.y +=0.01

    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={posArray}
                    count={500}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={2} map={noiseMap} color='#efead8'  opacity={0.9} sizeAttenuation={false} />
        </points>
    )
}
 
const NoiseCanvas = () => {
    return (
        <div className={styles.container}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight/>
                <pointLight position={[20,20,10]}/>
                <Noise />
            </Canvas>
        </div>
    )
}

export default NoiseCanvas