import Head from 'next/head';
import { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import QuoteScrolling from '../components/QuoteScrolling';
import Popup from '../components/Popup';
import { useState } from 'react';
import Hexagon from '../components/Hexagon';
import styles from '../styles/Home.module.css'
import Noise from '../components/Noise';


export default function Home() {
  const [show,setShow] = useState(false)

  return (
    < >
    <Noise/>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.contentPadding + " fade texture " + (show?utilStyles.blur: '')}>
        <h1 className={styles.titleAnimationDelay}>Serenity</h1>
        <div className='container'>
          <div style={{ flexBasis: '19%' }}>
            <img
              style={{ opacity: '0.25' }}
              src="/images/smoke.png"
              alt="incense smoke"
            />
          </div>
          <div className='columnBox' style={{ flexBasis: '80%' }}>
            <div className='container'>
              <div style={{ flexBasis: '80%' }}>
                <Hexagon/>
              </div>

              <div style={{ flexBasis: '20%', marginTop: '40%', textAlign: 'center' }}>
                <h4 className={utilStyles.header + ' ' + styles.animationDelay} >Scroll down :)</h4>
                {/** #TODO Lets make this h4 tag fade in a bit after the initial fade */}
              </div>
            </div>
          </div>
        </div>

        <QuoteScrolling />
        <Popup show={show} close = {setShow}>

        </Popup>
        
        <div className={utilStyles.center}><button className={utilStyles.button} onClick={()=>setShow(true)}>{`It's okay. Let's go:) -->`}</button></div>
      

        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667v298.667C0,411.221,4.779,416,10.667,416h490.667    c5.888,0,10.667-4.779,10.667-10.667V106.667C512,100.779,507.221,96,501.333,96z M490.667,394.667H21.333V117.333h469.333    V394.667z"/>
	</g>
</g>
</svg> */}


      </div>


    </>
  );

  /**
   * #TODO Put moss/evergreen trees/plants all over the home page to make it look more filled in. 
   *       Draw this on my own? This would help me become more of an artists and fill in my time
   *        at home.This would also add on to me drawing my own insence cone and creating my own style.
   * 
   * #TODO Think of a better way to do the buttons. Something more minimalistic styled.
   * Other website do circles with the backgroud clear. Kind of like frames that make
   * the art floating. Get inspired by features like this, but instead of modern,
   * more minimilistic and my style. Maybe something with plants.. Or with light radiating from it
   * instead of the button changing on hover. Fade as you get farther from the button and do more
   * luminance on the background color. DO a conversion to HSL. Or play with text color?
   * 
   * Think about a popup on hover instead? like prompting to fix their life? A gif that appears 
   * and asks to escape their reality. A gif of like a wizard in nature asking if they want a better life.
   * The black page can prompt the user to look at themselves for a bit. Like how you can see yourself in 
   * the laptop screen while something loads. I can try to make a wizard like the one keano has on his cover
   * and have him in nature with blades of grass moving. This he can be leaning on an olive tree. One with 
   * twisted branches and the leaves moving with the breeze.
   * 
   * IS the windows error screen really going to fit the theme? It can be the wizard pop up -> An actual page of the wizard gif in the nature.
   * He can have a lifttle olive tree in the background with text like from legend of zelda. As is stops coming in wait a bit then go to
   * the windows error screen? Then to product page.  
   * 
   * 
   * I want the products to be in the design of modern nature posters. It could be like a poster each page and as you scroll down a new page/poster
   * comes up. Maybe a scroll bar on the left with the basic buttons for most shops. Try to make it less like a nav bar though. Something minimalistic
   * but obviously still a navbar for people to use.
   * 
   * 
   * 
   * The posters can be around the threedot js model. As you move around you find the different 
   * products. It would be cool if instead of the windows thing, it was a portal going into this
   * model of a forest or a house.
   */

}