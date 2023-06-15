/**
 * 
 * This should be in between the home page and the product page.
 * The product page will be the first tame part of the webite where the user
 * will finally be able to try to buy products
 * 
 * For now this will be a windows error screen saying that their life has a
 * problem and needs a fix.
 * 
 * The webiste should go dark for a bit as to suggest something is wrong with the site.
 * It will then suddenly go to the exact screen of the windows error. 
 * 
 * This should also should have a skip button so the user doesn't need to continue doing this.
 * 
 */
import React from 'react'
import Dots from '../components/Dots'

const loading = () => {

  return (
    <div>
    <h3>loading</h3>
    
    <Dots/>
    </div>
  )
}

export default loading