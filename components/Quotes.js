/**
 * This element is used to allow quotes to fade in. It uses utilStyles to fade 
 */
import React, { useEffect, useRef, useState } from 'react'
import utilStyles from '../styles/utils.module.css'

export const Quotes = (props) => {
    const [vis, setVis] = useState(false); // visibility of quotes
    const containerRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVis(entry.isIntersecting);
            })
        }, {
            rootMargin: "-25px",
            
            
        });

       if (containerRef.current) observer.observe(containerRef.current)// This is so the quote can continue to be observed, load out and load back in
        // if i want to lazy load then just take the first if out
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    })
    const quoteClass = `${utilStyles.quote} ${vis ? utilStyles.show : ""} ${props.className}`

    return (
        <p
            style={props.style}
            ref={containerRef}
            className={quoteClass}
        > 
        {props.children}
        </p>
    )
}
