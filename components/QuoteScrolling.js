/**
 * This page handles the quote scrolling on the home page.
 * It should be so that you scroll down the quote three times, and on the last quote delete the first two
 * quote copies. User shouldn't be able to access it again unless they refresh the page.
 */

import React, { useEffect, useRef, useState } from 'react'
import { Quotes } from './Quotes';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const QuoteScrolling = () => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [scrollVis, setScrollVis] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetchData(page);
    }, [page])

    const fetchData = page => {
        const newItems = [];

        for (let i = 0; i < 2; i++) {
            if (hasMore) {
                newItems.push(i);
            }

        }
        if (page === 1) {
            setHasMore(false);
        }
        setItems([...newItems]);
    }

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(page + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [items])


    useEffect(() => {
        const scrollObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setScrollVis(entry.isIntersecting);
            })
        }, {
            rootMargin: "",
        });

        if (scrollRef.current) scrollObserver.observe(scrollRef.current)// This is so the quote can continue to be observed, load out and load back in
        return () => {
            if (scrollRef.current) scrollObserver.unobserve(scrollRef.current)
        }
    }, [])

    const quoteClass = `${scrollVis ? utilStyles.hide : ""} `

    return (
        <div>
            {items.map((item, index) => (
                <div className={quoteClass} key={index}>
                    {/* This is the div that holds the quotes - the one in the top div*/}
                    <div className='container' >
                        <img
                            style={{opacity:'0.5'}}
                            src="/images/smoke.png"
                            alt="incense smoke"
                        />
                        <div style={{ marginTop: '0%' }}>
                            <Quotes>Where are you going?</Quotes>
                        </div>
                        <div className='columnBox' style={{ width: '50%' }}>
                            <div className={`container `} style={{ marginTop: '40%' }}>
                                <Quotes style={{ marginLeft: '22%' }}>Why not stay here?</Quotes>
                                <Quotes className={utilStyles.inline} style={{ marginLeft: '40%' }}>...with me?</Quotes>
                            </div>

                            <Quotes style={{ marginLeft: '10%', marginTop: '80%' }}>Do you feel the need to leave reality?</Quotes></div>
                    </div>
                    <div className='container'>
                        <Quotes className='center'>Are you not comfortable with yourself?</Quotes>
                    </div>
                    <Image
                        src="/images/incense.png"
                        alt="incense cone"
                        width={75 / 3}
                        height={147 / 3}
                        style={{ marginLeft: "10%" }}
                    />

                </div>
            ))}
            {/** last div quote   className={lastVis?utilStyles.show:utilStyles.hide}  */}
            <div  >
                {/* This is the div that holds the quotes - the one in the top div*/}
                <div className='container' >
                    <div style={{flexBasis: '19%' }}>
                        <img
                        style={{opacity:'0.75'}}
                            src="/images/smoke.png"
                            alt="incense smoke"
                        />
                    </div>
                    <div style={{ marginTop: '0%' }}>
                        <Quotes>Where are you going?</Quotes>
                    </div>
                    <div className='columnBox' style={{ width: '50%' }}>
                        <div className={`container `} style={{ marginTop: '40%' }}>
                            <Quotes style={{ marginLeft: '22%' }}>Why not stay here?</Quotes>
                            <Quotes className={utilStyles.inline} style={{ marginLeft: '40%' }}>...with me?</Quotes>
                        </div>
                        <div ref={scrollRef} ><Quotes style={{ marginLeft: '10%', marginTop: '80%' }}>Do you feel the need to leave reality?</Quotes></div></div>

                </div>
                <div className='container'>
                    <Quotes className='center'>Are you not comfortable with yourself?</Quotes>
                </div>
                <Image
                    src="/images/incense.png"
                    alt="incense cone"
                    width={75 / 3}
                    height={147 / 3}
                    style={{ marginLeft: "10%" }}
                />

            </div>
        </div>
    )
}

export default QuoteScrolling