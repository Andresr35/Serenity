import React, { useEffect, useRef } from 'react'
import styles from './Popup.module.css'
import Link from 'next/link';

const Popup = (props) => {
  let modalShow;
  const wrapperRef = useRef(null)
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)&&props.show ) {
          props.close(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });


  const showClass = props.show ? styles.show : styles.hide;
  return (
    <div ref={wrapperRef} className={`${props.show ? styles.modal : ''} ${showClass}`}>
      {props.children}

      <Link href="/loading" className={styles.door}></Link>
      <img src="/images/canUJustStay.png" alt="modal" style={{ borderRadius:'10px', transform: 'rotate(90deg)' }} />

    </div>
  )
}

export default Popup