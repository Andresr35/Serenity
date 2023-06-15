/** 
 * This wraps around all pages to provide the globals.css to all pages.
 */

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }