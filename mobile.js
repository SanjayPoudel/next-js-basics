
import Link from 'next/link';
export default function Mobile() {
    return (
      <div>
        <h1> Mobile page</h1>
        <ul>
          <li><Link href="/"><a className=''>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/product"><a>product</a></Link></li>
          <li><Link href="/product/mobile"><a>mobile</a></Link></li>
          <li><Link href="/product/laptop"><a>Laptop</a></Link></li>

          </ul>   
        
     

     
   
          
       
  
       
      </div>
    )
  }
  