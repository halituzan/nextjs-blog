 // pages/_app.js
 import '../public/styles/globals.css'
 import 'tailwindcss/tailwind.css'

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

  export default MyApp