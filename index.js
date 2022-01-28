import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head> <title> Home</title></Head>
      <h1> Home page</h1>
        <ul>
          <li><Link href="/"><a className=''>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/product"><a>product</a></Link></li>
          <li><Link href="/product/mobile"><a>mobile</a></Link></li>
          <li><Link href="/product/laptop"><a>Laptop</a></Link></li>

          </ul>  
          
        <Image src="/images/temple.jpeg" height={400 } width={400}/>
        <style jsx>{`
      h2 {
        color:red;
      }
      `}</style>

       
        <h2> i have styled jsx</h2>
     
        <h3>I have Global CSS</h3>
        <h4 className={styles.green}>I have COmponent Based Module CSS</h4>

     
    </div>
  )
}
