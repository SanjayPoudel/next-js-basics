import Link from 'next/link';
import Head from 'next/head';
export default function About() {
    return (
      <div>
          <Head><title>About</title></Head>
        <h1> About page</h1>
        <ul>
          <li><Link href="/"><a className=''>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/product"><a>product</a></Link></li>
          <li><Link href="/product/mobile"><a>mobile</a></Link></li>
          <li><Link href="/product/laptop"><a>Laptop</a></Link></li>

          </ul> 
          <h2>I have Styled JSX - About Page</h2>
   <h3>I have Global CSS - ABout Page</h3>  
        
     

     
       
      </div>
    )
  }
  